import appTools, { defineConfig } from "@modern-js/app-tools";

export default defineConfig<'rspack'>({
  runtime: {
    router: true,
  },
  output: {
    disableTsChecker: process.env.NODE_ENV === "development",
  },
  plugins: [
    appTools({
      bundler: "experimental-rspack",
    }),
  ],
  tools: {
    rspack(config) {
      config.optimization.splitChunks = {
        chunks: "all",
        // When chunk size >= 50000 bytes, split it into separate chunk
        enforceSizeThreshold: 50000,
      };
    },
  },
});
