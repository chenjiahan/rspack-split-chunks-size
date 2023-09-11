import appTools, { defineConfig } from "@modern-js/app-tools";

export default defineConfig<"rspack">({
  runtime: {
    router: true,
  },
  output: {
    disableTsChecker: true,
  },
  tools: {
    rspack: {
      optimization: {
        chunkIds: "deterministic",
      },
    },
  },
  plugins: [
    appTools({
      bundler: "experimental-rspack",
    }),
  ],
});
