import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

const repoName = "/my-react-app/";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),

    tailwindcss(),
    svgr(),
  ],
  base: repoName,
  test: {
    globals: true,
    setupFiles: ["setupTests.ts"],
    environment: "jsdom",
  },
});
