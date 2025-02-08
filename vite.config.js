import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"/2002vini.github.io/vini.github.io/",
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  }
})
