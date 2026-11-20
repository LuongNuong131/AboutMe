import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: process.env.PORTFOLIO_BASE || "/",
  plugins: [vue()],
});
