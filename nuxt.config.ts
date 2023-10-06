// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt"],
  pwa:{
    manifest: {
      "theme_color": "#fff",
      "background_color": "#fff",
      "display": "standalone",
      "scope": "/",
      "start_url": "/",
      "name": "Nganu Commerce",
      "short_name": "Nganu",
      "icons": [
          {
              "src": "images/icons/icon-192x192.png",
              "sizes": "192x192",
              "type": "image/png"
          },
          {
              "src": "images/icons/icon-256x256.png",
              "sizes": "256x256",
              "type": "image/png"
          },
          {
              "src": "images/icons/icon-384x384.png",
              "sizes": "384x384",
              "type": "image/png"
          },
          {
              "src": "images/icons/icon-512x512.png",
              "sizes": "512x512",
              "type": "image/png"
          }
      ]
    },
    devOptions: {
      enabled: true
    }
  }
})