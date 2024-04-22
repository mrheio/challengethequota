import { defineConfig, type Config } from 'drizzle-kit';

export default defineConfig({
    schema: './src/db/schema.ts',
    driver: 'turso',
    dbCredentials: {
        url: process.env.NUXT_TURSO_CONNECTION_URL!,
        authToken: process.env.NUXT_TURSO_AUTH_TOKEN!,
    },
}) satisfies Config;
