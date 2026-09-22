import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "frontend",
  base: "/qr-code-generator/",
  plugins: [react()],
  build: {
    outDir: "../docs",
    emptyOutDir: false,
  },
});
