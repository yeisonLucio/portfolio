import vuetify from "vite-plugin-vuetify"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    ssr: {
      noExternal: ['vuetify']
    },
  },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins?.push(
        vuetify()
      ))
    },
  ],
  devtools: { enabled: true }
})
