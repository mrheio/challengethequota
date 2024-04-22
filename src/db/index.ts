import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';

const client = createClient({
    url: process.env.NUXT_TURSO_CONNECTION_URL!,
    authToken: process.env.NUXT_TURSO_AUTH_TOKEN!,
});

export const db = drizzle(client, { schema });
