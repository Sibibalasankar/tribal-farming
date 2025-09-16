import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // ✅ Ensure correct base path for SPA
  build: {
    outDir: "dist", // ✅ Keep this for Render deployment
  },
  server: {
    historyApiFallback: true, // ✅ SPA fallback for dev
  },
});
