/**
 * Injects homepage JSON-LD from schema.ts into index.html (between SCHEMA markers).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { getSchemasForPath } from "../src/config/schema.ts";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const INDEX = join(ROOT, "index.html");
const START = "<!-- SCHEMA_START -->";
const END = "<!-- SCHEMA_END -->";

const schemas = getSchemasForPath("/");
const block = schemas
  .map((schema) => `    <script type="application/ld+json">${JSON.stringify(schema)}</script>`)
  .join("\n");

let html = readFileSync(INDEX, "utf8");
if (!html.includes(START) || !html.includes(END)) {
  throw new Error(`index.html must contain ${START} and ${END}`);
}

const updated = html.replace(
  new RegExp(`${START}[\\s\\S]*?${END}`),
  `${START}\n${block}\n    ${END}`,
);

writeFileSync(INDEX, updated, "utf8");
console.log(`Synced ${schemas.length} JSON-LD blocks into index.html`);
