import { defineConfig, type Config } from 'drizzle-kit';
import { xata } from './src/db';

export default defineConfig({
    schema: './db/schema.ts',
    driver: 'pg',
    dbCredentials: {
        connectionString: xata.sql.connectionString,
    },
}) satisfies Config;
