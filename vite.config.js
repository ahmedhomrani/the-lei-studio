import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from the custom domain https://thelei.studio/ (GitHub Pages),
// so assets are served from the site root.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
