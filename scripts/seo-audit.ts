/**
 * SEO checklist audit for marviko.by scope.
 * Usage: npm run build && npm run seo:audit
 *        LIVE=1 npm run seo:audit  — also check production
 */
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { PRERENDER_PATHS } from "../src/config/prerender.ts";
import { SEO_BY_PATH } from "../src/config/seo.ts";
import { getSchemasForPath } from "../src/config/schema.ts";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const LIVE = process.env.LIVE === "1";
const LIVE_BASE = "https://marviko.by";

type Status = "ok" | "warn" | "fail";

interface Check {
  id: string;
  category: string;
  status: Status;
  message: string;
}

const checks: Check[] = [];

function add(
  category: string,
  id: string,
  status: Status,
  message: string,
) {
  checks.push({ category, id, status, message });
}

function distFile(route: (typeof PRERENDER_PATHS)[number]): string {
  return route === "/" ? join(DIST, "index.html") : join(DIST, route.slice(1), "index.html");
}

function analyzeHtml(html: string, route: string) {
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  const lang = html.match(/<html[^>]*lang="([^"]*)"/)?.[1];
  const jsonLd = (html.match(/application\/ld\+json/g) ?? []).length;
  const h1Count = (html.match(/<h1[\s>]/gi) ?? []).length;
  const rootOnly =
    /<div id="root">\s*<\/div>/.test(html) || /<div id="root"><\/div>/.test(html);
  const hasLocalBusiness = /"LocalBusiness"/.test(html);
  const hasFaq = /"FAQPage"/.test(html);
  const hasService = /"@type":"Service"|"@type": "Service"/.test(html);
  const bodyTextLen = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim().length;

  return {
    title,
    canonical,
    lang,
    jsonLd,
    h1Count,
    rootOnly,
    hasLocalBusiness,
    hasFaq,
    hasService,
    bodyTextLen,
  };
}

async function fetchLive(path: string): Promise<string | null> {
  const url = path === "/" ? `${LIVE_BASE}/` : `${LIVE_BASE}${path}/`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

// --- 1. Prerender / empty React shell ---
add("1. Prerendering", "build-dist", existsSync(DIST) ? "ok" : "fail", existsSync(DIST) ? "dist/ exists" : "Run npm run build first");

for (const route of PRERENDER_PATHS) {
  const file = distFile(route);
  const seo = SEO_BY_PATH[route];

  if (!existsSync(file)) {
    add("1. Prerendering", `file-${route}`, "fail", `Missing ${file}`);
    continue;
  }

  const html = readFileSync(file, "utf8");
  const a = analyzeHtml(html, route);

  if (a.title === seo.title && a.canonical === seo.canonical) {
    add("4. Technical", `meta-${route}`, "ok", `${route}: title + canonical in HTML`);
  } else {
    add("4. Technical", `meta-${route}`, "fail", `${route}: meta mismatch (title/canonical)`);
  }

  const expectedLd = getSchemasForPath(route).length;
  if (a.jsonLd === expectedLd) {
    add("2. JSON-LD", `ld-${route}`, "ok", `${route}: ${a.jsonLd} JSON-LD block(s) in HTML`);
  } else {
    add("2. JSON-LD", `ld-${route}`, "fail", `${route}: expected ${expectedLd} JSON-LD, got ${a.jsonLd}`);
  }

  if (a.rootOnly && a.h1Count === 0) {
    add(
      "1. Prerendering",
      `body-${route}`,
      "fail",
      `${route}: #root empty, no <h1> in HTML — bots see shell only (not full prerender)`,
    );
  } else if (a.h1Count >= 1) {
    add("1. Prerendering", `body-${route}`, "ok", `${route}: content in HTML (${a.h1Count} h1)`);
  } else {
    add("1. Prerendering", `body-${route}`, "warn", `${route}: partial body in HTML`);
  }

  if (route === "/" && a.hasLocalBusiness && a.hasFaq) {
    add("2. JSON-LD", "types-home", "ok", "/: LocalBusiness + FAQPage in HTML");
  } else if (route === "/" && (!a.hasLocalBusiness || !a.hasFaq)) {
    add("2. JSON-LD", "types-home", "fail", "/: missing LocalBusiness or FAQPage");
  }

  if (["/windows-pvh", "/windows-alu", "/doors-pvh", "/doors-alu", "/partitions", "/windowsills", "/accessories"].includes(route)) {
    if (a.hasService) {
      add("2. JSON-LD", `service-${route}`, "ok", `${route}: Service schema in HTML`);
    } else {
      add("2. JSON-LD", `service-${route}`, "fail", `${route}: Service schema missing`);
    }
  }

  if (a.lang === "ru") {
    add("4. Technical", `lang-${route}`, "ok", `${route}: lang="ru"`);
  } else {
    add("4. Technical", `lang-${route}`, "warn", `${route}: lang=${a.lang ?? "missing"}`);
  }
}

// vite-plugin-prerender per spec
const viteConfig = readFileSync(join(ROOT, "vite.config.ts"), "utf8");
if (existsSync(join(ROOT, "scripts/prerender.ts"))) {
  add("1. Prerendering", "tooling", "ok", "scripts/prerender.ts — full HTML via Playwright at build");
} else {
  add("1. Prerendering", "tooling", "fail", "No prerender configured");
}

// --- 3. Semantic HTML (source) ---
const indexSrc = readFileSync(join(ROOT, "src/pages/Index.tsx"), "utf8");
if (indexSrc.includes('id="faq"') && /<h1[\s>]/.test(indexSrc)) {
  add("3. Semantics", "home-source", "ok", "Index: h1 + section#faq in React source");
} else {
  add("3. Semantics", "home-source", "fail", "Index: missing h1 or #faq");
}
if (readFileSync(join(ROOT, "src/components/Footer.tsx"), "utf8").includes("<address")) {
  add("3. Semantics", "address", "ok", "Footer: <address> for contacts");
} else {
  add("3. Semantics", "address", "fail", "Footer: no <address>");
}

const homeHtml = existsSync(distFile("/")) ? readFileSync(distFile("/"), "utf8") : "";
if (homeHtml && !/<h1[\s>]/i.test(homeHtml)) {
  add("3. Semantics", "home-html-h1", "fail", "H1 only after JS — not in prerendered HTML");
}

// Service prices in schema
const schemaSrc = readFileSync(join(ROOT, "src/config/schema.ts"), "utf8");
if (!schemaSrc.includes("Offer") && !schemaSrc.includes("price")) {
  add("2. JSON-LD", "service-prices", "warn", "Service schema without prices/Offer (spec mentioned prices)");
}

// --- 4. Technical files ---
const sitemap = readFileSync(join(ROOT, "public/sitemap.xml"), "utf8");
const requiredPaths = PRERENDER_PATHS.map((p) =>
  p === "/" ? "https://marviko.by/" : `https://marviko.by${p}`,
);
const missingSitemap = requiredPaths.filter((u) => !sitemap.includes(u));
if (missingSitemap.length === 0) {
  add("4. Technical", "sitemap", "ok", "sitemap.xml: all 7 public URLs");
} else {
  add("4. Technical", "sitemap", "fail", `sitemap.xml missing: ${missingSitemap.join(", ")}`);
}

const robots = readFileSync(join(ROOT, "public/robots.txt"), "utf8");
if (robots.includes("Sitemap:") && robots.includes("Allow: /")) {
  add("4. Technical", "robots", "ok", "robots.txt: Allow + Sitemap");
} else {
  add("4. Technical", "robots", "fail", "robots.txt incomplete");
}
if (!/Yandex/i.test(robots)) {
  add("4. Technical", "robots-yandex", "warn", "robots.txt: no explicit Yandex bot block (optional)");
}

// --- 5. Webmaster (manual) ---
add(
  "5. Webmaster",
  "gsc",
  "warn",
  "Google Search Console: manual setup — no verification meta in index.html",
);
add(
  "5. Webmaster",
  "yandex",
  "warn",
  "Яндекс Вебмастер: manual setup — no yandex-verification meta",
);
add("5. Webmaster", "gbp", "warn", "Google Business Profile / Яндекс Бизнес: outside codebase");

// --- Live checks ---
if (LIVE) {
  for (const route of PRERENDER_PATHS) {
    const html = await fetchLive(route);
    if (!html) {
      add("Live", route, "fail", `Could not fetch ${LIVE_BASE}${route}/`);
      continue;
    }
    const seo = SEO_BY_PATH[route];
    const a = analyzeHtml(html, route);
    if (a.title === seo.title) {
      add("Live", `title${route}`, "ok", `Live ${route}/ title OK`);
    } else {
      add("Live", `title${route}`, "fail", `Live ${route}/ title: ${a.title}`);
    }
    if (a.jsonLd >= getSchemasForPath(route).length) {
      add("Live", `ld${route}`, "ok", `Live ${route}/ JSON-LD: ${a.jsonLd}`);
    } else {
      add("Live", `ld${route}`, "fail", `Live ${route}/ JSON-LD: ${a.jsonLd}`);
    }
    if (a.h1Count === 0 && a.rootOnly) {
      add("Live", `body${route}`, "fail", `Live ${route}/ empty #root (no content for bots)`);
    }
  }
}

// --- Report ---
const icon = (s: Status) => (s === "ok" ? "✅" : s === "warn" ? "⚠️" : "❌");
const byCategory = new Map<string, Check[]>();
for (const c of checks) {
  if (!byCategory.has(c.category)) byCategory.set(c.category, []);
  byCategory.get(c.category)!.push(c);
}

console.log("\n# SEO Audit — marviko.by\n");
for (const [cat, items] of byCategory) {
  console.log(`\n## ${cat}\n`);
  for (const c of items) {
    console.log(`${icon(c.status)} ${c.message}`);
  }
}

const fail = checks.filter((c) => c.status === "fail").length;
const warn = checks.filter((c) => c.status === "warn").length;
const ok = checks.filter((c) => c.status === "ok").length;
console.log(`\n---\nSummary: ${ok} ok, ${warn} warn, ${fail} fail\n`);

process.exit(fail > 0 ? 1 : 0);
