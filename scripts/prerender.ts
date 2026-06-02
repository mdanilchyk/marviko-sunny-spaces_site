/**
 * Post-build: full-page prerender with Playwright (HTML head + #root content for bots).
 * Requires: npx playwright install chromium (or npm run playwright:install)
 */
import { spawn, type ChildProcess } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { PRERENDER_PATHS } from "../src/config/prerender.ts";
import { getSchemasForPath } from "../src/config/schema.ts";
import { SEO_BY_PATH } from "../src/config/seo.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");
const PREVIEW_PORT = 4173;
const PREVIEW_URL = `http://127.0.0.1:${PREVIEW_PORT}`;

process.env.PLAYWRIGHT_BROWSERS_PATH =
  process.env.PLAYWRIGHT_BROWSERS_PATH ?? join(ROOT, ".playwright-browsers");

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function distFileForRoute(route: (typeof PRERENDER_PATHS)[number]): string {
  if (route === "/") {
    return join(DIST, "index.html");
  }
  return join(DIST, route.slice(1), "index.html");
}

async function waitForPreview(): Promise<void> {
  for (let attempt = 0; attempt < 60; attempt++) {
    try {
      const res = await fetch(PREVIEW_URL);
      if (res.ok) {
        return;
      }
    } catch {
      // not ready
    }
    await sleep(500);
  }
  throw new Error(`Vite preview did not start on ${PREVIEW_URL}`);
}

function startPreview(): ChildProcess {
  const viteBin = join(ROOT, "node_modules", "vite", "bin", "vite.js");
  return spawn(process.execPath, [viteBin, "preview", "--port", String(PREVIEW_PORT), "--strictPort"], {
    cwd: ROOT,
    stdio: "pipe",
    env: { ...process.env, NODE_ENV: "production" },
  });
}

async function launchBrowser() {
  const { chromium } = await import("playwright");
  try {
    return await chromium.launch({ headless: true, channel: "chrome" });
  } catch {
    return await chromium.launch({ headless: true });
  }
}

async function main() {
  if (!existsSync(join(DIST, "index.html"))) {
    throw new Error("dist/index.html missing — run vite build first");
  }

  const preview = startPreview();

  try {
    await waitForPreview();
    console.log(`Prerendering ${PRERENDER_PATHS.length} routes (full HTML)…`);

    const browser = await launchBrowser();

    try {
      for (const route of PRERENDER_PATHS) {
        const seo = SEO_BY_PATH[route];
        const minSchemas = getSchemasForPath(route).length;
        const outFile = distFileForRoute(route);
        const page = await browser.newPage();

        await page.goto(`${PREVIEW_URL}${route}`, {
          waitUntil: "domcontentloaded",
          timeout: 60_000,
        });

        await page.waitForSelector("#root h1", { timeout: 45_000 });
        await page.waitForFunction(
          (expectedTitle) => document.title === expectedTitle,
          seo.title,
          { timeout: 30_000 },
        );

        await page.waitForFunction(
          (expectedCanonical) => {
            const link = document.querySelector('link[rel="canonical"]');
            return link?.getAttribute("href") === expectedCanonical;
          },
          seo.canonical,
          { timeout: 30_000 },
        );

        if (minSchemas > 0) {
          await page.waitForFunction(
            (count) =>
              document.querySelectorAll('script[type="application/ld+json"]').length >= count,
            minSchemas,
            { timeout: 20_000 },
          );
        }

        const rootHtml = await page.locator("#root").innerHTML();
        if (rootHtml.trim().length < 50) {
          throw new Error(`${route}: #root content too small after render`);
        }

        mkdirSync(dirname(outFile), { recursive: true });
        writeFileSync(outFile, await page.content(), "utf8");

        const h1 = await page.locator("h1").first().textContent();
        console.log(
          `  ✓ ${route} → ${outFile.replace(ROOT + "/", "")} (h1: ${h1?.slice(0, 40)}…, ${minSchemas} JSON-LD)`,
        );
        await page.close();
      }
    } finally {
      await browser.close();
    }

    console.log(`Prerendered ${PRERENDER_PATHS.length} routes.`);
  } finally {
    preview.kill("SIGTERM");
  }
}

main().catch((err) => {
  console.error(err);
  console.error(
    "\nIf browser is missing, run: npm run playwright:install\n",
  );
  process.exit(1);
});
