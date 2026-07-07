import { expect, test } from "@playwright/test";

const ROUTES = [
  "/",
  "/windows-pvh",
  "/windows-alu",
  "/doors-pvh",
  "/doors-alu",
  "/partitions",
  "/windowsills",
  "/accessories",
  "/portfolio",
];

test.describe("smoke routes", () => {
  for (const route of ROUTES) {
    test(`renders ${route}`, async ({ page }) => {
      await page.goto(route, { waitUntil: "domcontentloaded" });
      await expect(page.locator("h1").first()).toBeVisible();
    });
  }
});
