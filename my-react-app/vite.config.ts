import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [
    tsconfigPaths({
      root: process.cwd(),
    }),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),

    tailwindcss(),
    svgr(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  base: "/Internship_Task3/",
  test: {
    globals: true,
    setupFiles: ["setupTests.ts"],
    environment: "jsdom",
  },
});
