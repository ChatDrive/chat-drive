import { VitePWA } from 'vite-plugin-pwa';

export default function setupVitePwa() {
  VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico'],
    manifest: {
      name: 'ChatDrive',
      short_name: 'ChatDrive',
      theme_color: '#fff',
      icons: [
        {
          src: '/logo.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/logo.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/logo.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  });
}
