import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base: './' keeps asset paths relative so the build works when served
// from a GitHub Pages sub-path (https://eng-attaullah.github.io/Atta-Ullah/)
export default defineConfig({
  base: './',
  plugins: [react()],
})
