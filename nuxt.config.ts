// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src/',
    devtools: { enabled: true },
    css: ['~/assets/global.css'],
    modules: [
        '@nuxtjs/color-mode',
        'radix-vue/nuxt',
        '@nuxtjs/stylelint-module',
        'nuxt-icon',
        '@vee-validate/nuxt',
    ],
    runtimeConfig: {},
    veeValidate: {
        autoImports: true,
        componentNames: {
            Form: 'VeeForm',
            Field: 'VeeField',
            FieldArray: 'VeeFieldArray',
            ErrorMessage: 'VeeErrorMessage',
        },
        typedSchemaPackage: 'zod',
    },
});
