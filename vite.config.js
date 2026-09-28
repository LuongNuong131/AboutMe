import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    allowedHosts: ["4173-ivhbpjfow6no7yfhi7qcc-4447db31.sg2.manus.computer"],
  },
})
