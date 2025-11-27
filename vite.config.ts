import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      // Optimize images in public directory
      includePublic: true,

      // Show optimization statistics
      logStats: true,

      // PNG optimization - high quality with compression
      png: {
        quality: 85,
        compressionLevel: 9,
      },

      // JPEG optimization - progressive for better perceived loading
      jpeg: {
        quality: 85,
        progressive: true,
        mozjpeg: true,
      },

      // JPG optimization
      jpg: {
        quality: 85,
      },

      // WebP optimization - better compression than PNG/JPEG
      webp: {
        lossless: false,
        quality: 85,
        alphaQuality: 85,
      },

      // AVIF optimization - next-gen format
      avif: {
        lossless: false,
        quality: 80,
      },
    }),
  ],
})
