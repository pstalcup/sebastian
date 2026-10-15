import { build } from "esbuild";

await build({
  entryPoints: { sebastian: "src/main.ts" },
  bundle: true,
  minifySyntax: true,
  platform: "node",
  format: "cjs",
  target: "es2020",
  external: ["kolmafia"],
  outdir: "dist/scripts/sebastian",
});
