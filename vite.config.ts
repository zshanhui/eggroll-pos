import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
  ],
  root: ".",
  publicDir: "public",
  esbuild: {
    loader: "tsx",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@/client": resolve(__dirname, "./src/client"),
      "@/server": resolve(__dirname, "./src/server"),
      "@/shared": resolve(__dirname, "./src/shared"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
      },
    },
  },
  server: {
    port: 3001,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/webhook": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/r": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/t": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
});
