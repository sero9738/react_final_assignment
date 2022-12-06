import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // config.baseUrl = 'http://localhost:3000';
      config.baseUrl = 'https://09-rooms-next-g7bfwmyzw-amann.vercel.app/';
      return config;
    },
  },
});
