/**
 * Validates prerender output after `npm run build`. Exit 1 on mismatch.
 */
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { PRERENDER_PATHS } from "../src/config/prerender.ts";
import { SEO_BY_PATH } from "../src/config/seo.ts";
import { getSchemasForPath } from "../src/config/schema.ts";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");

function distFile(route: (typeof PRERENDER_PATHS)[number]): string {
  return route === "/" ? join(DIST, "index.html") : join(DIST, route.slice(1), "index.html");
}

function extract(html: string, pattern: RegExp): string | null {
  const m = html.match(pattern);
  return m?.[1] ?? null;
}

let failed = 0;

for (const route of PRERENDER_PATHS) {
  const file = distFile(route);
  const seo = SEO_BY_PATH[route];
  const expectedSchemas = getSchemasForPath(route).length;
  let routeOk = true;

  if (!existsSync(file)) {
    console.error(`✗ ${route}: missing ${file}`);
    failed++;
    continue;
  }

  const html = readFileSync(file, "utf8");
  const title = extract(html, /<title>([^<]*)<\/title>/);
  const canonical = extract(html, /<link rel="canonical" href="([^"]*)"/);
  const schemaCount = (html.match(/application\/ld\+json/g) ?? []).length;

  if (title !== seo.title) {
    console.error(`✗ ${route}: title mismatch\n  expected: ${seo.title}\n  got:      ${title}`);
    routeOk = false;
  }
  if (canonical !== seo.canonical) {
    console.error(`✗ ${route}: canonical mismatch\n  expected: ${seo.canonical}\n  got:      ${canonical}`);
    routeOk = false;
  }
  if (schemaCount !== expectedSchemas) {
    console.error(`✗ ${route}: JSON-LD count ${schemaCount}, expected ${expectedSchemas}`);
    routeOk = false;
  }

  if (routeOk) {
    console.log(`✓ ${route}`);
  } else {
    failed++;
  }
}

if (failed > 0) {
  console.error(`\n${failed} check(s) failed.`);
  process.exit(1);
}

console.log("\nAll prerender checks passed.");
