import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

/** 301 redirect /windows → /windows-pvh (dev server; production: .htaccess / nginx). */
function legacyWindowsRedirect(): Plugin {
  return {
    name: "legacy-windows-redirect",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split("?")[0] ?? "";
        if (url === "/windows" || url === "/windows/") {
          res.writeHead(301, { Location: "/windows-pvh" });
          res.end();
          return;
        }
        next();
      });
    },
  };
}

/** Keep JSON-LD in source index.html; omit from production bundle (Helmet + prerender add per route). */
function stripIndexSchemaFromBuild(): Plugin {
  return {
    name: "strip-index-schema-from-build",
    transformIndexHtml: {
      order: "pre",
      handler(html, ctx) {
        if (ctx.server) return html;
        return html.replace(/<!-- SCHEMA_START -->[\s\S]*?<!-- SCHEMA_END -->\s*/i, "");
      },
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    legacyWindowsRedirect(),
    stripIndexSchemaFromBuild(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
