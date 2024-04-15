// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	srcDir: 'src/',
	devtools: { enabled: true },
	runtimeConfig: {
		XATA_BRANCH: '',
		XATA_API_KEY: '',
	},
});