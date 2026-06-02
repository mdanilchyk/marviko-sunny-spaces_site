/**
 * Post-build: write per-route index.html with correct <head> (title, meta, JSON-LD).
 * Uses dist/index.html as shell; React still hydrates #root on the client.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { PRERENDER_PATHS } from "../src/config/prerender.ts";
import { getSchemasForPath } from "../src/config/schema.ts";
import { SEO_BY_PATH } from "../src/config/seo.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");
const SHELL = join(DIST, "index.html");

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function distFileForRoute(route: (typeof PRERENDER_PATHS)[number]): string {
  if (route === "/") {
    return join(DIST, "index.html");
  }
  return join(DIST, route.slice(1), "index.html");
}

function patchHtml(shell: string, route: (typeof PRERENDER_PATHS)[number]): string {
  const seo = SEO_BY_PATH[route];
  const schemas = getSchemasForPath(route);
  const robots = seo.noindex ? "noindex, follow" : "index, follow";

  let html = shell.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi, "");

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(seo.title)}</title>`);

  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${escapeAttr(seo.description)}" />`,
  );

  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${seo.canonical}" />`,
  );

  html = html.replace(
    /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="robots" content="${robots}" />`,
  );

  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${seo.canonical}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${escapeAttr(seo.ogTitle)}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${escapeAttr(seo.ogDescription)}" />`,
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${escapeAttr(seo.ogTitle)}" />`,
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${escapeAttr(seo.ogDescription)}" />`,
  );

  const schemaScripts = schemas
    .map(
      (schema) =>
        `    <script type="application/ld+json">${JSON.stringify(schema)}</script>`,
    )
    .join("\n");

  const headEnd = schemaScripts ? `\n${schemaScripts}\n  </head>` : "  </head>";
  html = html.replace(/\s*<\/head>/i, headEnd);

  return html;
}

function main() {
  const shell = readFileSync(SHELL, "utf8");

  for (const route of PRERENDER_PATHS) {
    const outFile = distFileForRoute(route);
    const html = patchHtml(shell, route);
    mkdirSync(dirname(outFile), { recursive: true });
    writeFileSync(outFile, html, "utf8");
    const schemaCount = getSchemasForPath(route).length;
    console.log(`  ✓ ${route} → ${outFile.replace(ROOT + "/", "")} (${schemaCount} JSON-LD)`);
  }

  console.log(`Prerendered ${PRERENDER_PATHS.length} routes.`);
}

main();
