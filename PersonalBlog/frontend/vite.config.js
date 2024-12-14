import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target:"http://localhost:3001/v1/api",
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
