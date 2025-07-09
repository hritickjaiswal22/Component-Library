import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  // This tells tsup to delete the entire dist/ folder before each build.
  clean: true,
  external: ["react", "react-dom", "styled-components"],
  // This adds "use client" to the top of every JavaScript file that gets built.This is specifically for Next.js App Router (Next.js 13+) which has two types of components:
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});
