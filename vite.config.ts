import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "frontend",
  // Relative asset URLs work on both the GitHub Pages subpath and Cloudflare's root domain.
  base: "./",
  plugins: [react()],
  build: {
    outDir: "../docs",
    emptyOutDir: false,
  },
});
