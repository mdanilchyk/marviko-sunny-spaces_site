import type { SeoPath } from "@/config/seo";

/** Public routes pre-rendered to static HTML at build time (see scripts/prerender.ts). */
export const PRERENDER_PATHS = [
  "/",
  "/windows-pvh",
  "/windows-alu",
  "/doors-pvh",
  "/doors-alu",
  "/partitions",
  "/windowsills",
  "/accessories",
  "/portfolio",
] as const satisfies readonly SeoPath[];
