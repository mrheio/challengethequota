// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src/',
    devtools: { enabled: true },
    runtimeConfig: {
        XATA_BRANCH: '',
        XATA_API_KEY: '',
    },
    css: ['~/assets/global.css'],
    modules: ['@nuxtjs/color-mode', 'radix-vue/nuxt'],
    colorMode: {
        fallback: 'dark',
    },
});
