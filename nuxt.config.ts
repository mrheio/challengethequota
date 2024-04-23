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
        '@sidebase/nuxt-auth',
        '@vee-validate/nuxt',
    ],
    runtimeConfig: {
        authSecret: '',
        authTokenMaxAge: '',
    },
    auth: {
        provider: {
            type: 'local',
            token: {
                signInResponseTokenPointer: '/accessToken',
            },
            sessionDataType: { user: { username: 'string' } },
        },
    },
    vite: {
        optimizeDeps: {
            exclude: ['jsonwebtoken'],
        },
    },
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
