import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: 'IBMS',
        short_name: 'IBMS',
        theme_color: '#ffffff',
        icons: [
          {
            src: './icon-leaf.png',
            sizes: '96x96',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
