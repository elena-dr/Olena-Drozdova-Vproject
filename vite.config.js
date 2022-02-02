import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    target: 'es2015'
  },
  plugins: [
    VitePWA({
      manifest: {
        background_color: 'grey',
        display: 'standalone',
        icons: [
          {
            purpose: 'any',
            sizes: '192x192',
            src: 'manifest-logo-192.maskable.png',
            type: 'image/png'
          },
          {
            purpose: 'maskable',
            sizes: '192x192',
            src: 'manifest-logo-192.maskable.png',
            type: 'image/png'
          },
          {
            purpose: 'any',
            sizes: '512x512',
            src: 'manifest-logo-512.maskable.png',
            type: 'image/png'
          },
          {
            purpose: 'maskable',
            sizes: '512x512',
            src: 'manifest-logo-512.maskable.png',
            type: 'image/png'
          }
        ],
        name: 'Testapplikation',
        short_name: 'Testapp',
        start_url: '.',
        theme_color: 'red'
      },
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['assets/**', 'index.html', 'manifest.webmanifest']
      }
    }),
    vue()]
})
