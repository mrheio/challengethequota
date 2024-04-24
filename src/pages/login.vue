<script setup lang="ts">
definePageMeta({
    middleware: 'guest-only',
});

import {
    loginRequestUserSchema,
    registerRequestUserSchema,
} from '~/validation';

const panel = ref<'login' | 'register'>('login');
const loginValidationSchema = toTypedSchema(loginRequestUserSchema);
const registerValidationSchema = toTypedSchema(registerRequestUserSchema);

const login = async (values: Zod.infer<typeof loginRequestUserSchema>) => {
    await $fetch('/api/auth/login', { method: 'POST', body: values });
    reloadNuxtApp();
};

const register = async (
    values: Zod.infer<typeof registerRequestUserSchema>,
) => {
    await $fetch('/api/auth/register', { method: 'POST', body: values });
    reloadNuxtApp();
};
</script>

<template>
    <div v-if="panel === 'login'" class="container centered min-h-screen">
        <VeeForm
            @submit="login"
            :validation-schema="loginValidationSchema"
            class="login-form"
        >
            <h1>Enter ctq account</h1>
            <Input
                type="text"
                name="username"
                label="Username"
                placeholder="myusername"
            />

            <Input
                type="password"
                name="password"
                label="Password"
                placeholder="mysecretpassword"
            />

            <button type="submit">Enter Account</button>
            <button type="button" @click="panel = 'register'">
                No account? Create one here
            </button>
        </VeeForm>
    </div>

    <div v-if="panel === 'register'" class="container centered min-h-screen">
        <VeeForm
            @submit="register"
            :validation-schema="registerValidationSchema"
            class="login-form"
        >
            <h1>Create a ctq account</h1>
            <Input
                type="email"
                name="email"
                label="Email"
                placeholder="example@email.com"
            />

            <Input
                type="text"
                name="username"
                label="Username"
                placeholder="myusername"
            />

            <Input
                type="password"
                name="password"
                label="Password"
                placeholder="mysecretpassword"
            />

            <button type="submit">Create Account</button>
            <button type="button" @click="panel = 'login'">
                I have an account
            </button>
        </VeeForm>
    </div>
</template>

<style scoped>
.login-form {
    width: 100%;
    padding: 2rem 0;
}

.login-form h1 {
    text-align: center;
}

.login-form > * + * {
    margin-top: 2rem;
}
</style>
