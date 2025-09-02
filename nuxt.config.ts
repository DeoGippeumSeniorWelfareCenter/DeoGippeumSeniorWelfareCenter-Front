export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  alias: {
    "@app": "./src/app",
    "@page": "./src/app/route",
    "@layouts": "./src/app/layouts",
    "@entitiy": "./src/entity",
    "@feature": "./src/feature",
    "@shared": "./src/shared",
    "@widgets": "./src/widget",
  },
  dir: {
    pages: "./src/app/routes",
    layouts: "./src/app/layouts",
  },
});
