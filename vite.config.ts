import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // CJS-only deps must be bundled for the build-time prerender (ESM) to import them.
  ssr: {
    noExternal: ["react-helmet-async", "react-router-dom", "react-router", "@supabase/supabase-js"],
  },
}));
