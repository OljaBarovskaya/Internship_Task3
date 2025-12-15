import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),

    tailwindcss(),
    svgr(),
    tsconfigPaths({
      root: process.cwd(),
    }),
  ],

  base: "/Internship_Task3/",
  test: {
    globals: true,
    setupFiles: ["setupTests.ts"],
    environment: "jsdom",
  },
});
