import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle';
import { Lucia } from 'lucia';
import { db } from '~/db';
import { sessions, users } from '~/db/schema';

export const adapter = new DrizzleSQLiteAdapter(db, sessions, users);

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        attributes: {
            secure: !import.meta.dev,
        },
    },
    getUserAttributes: (attributes) => {
        return {
            username: attributes.username,
            role: attributes.role,
        };
    },
});

declare module 'lucia' {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: DatabaseUserAttributes;
        UserId: number;
    }
}

interface DatabaseUserAttributes {
    username: string;
    role: 'normal' | 'admin';
}
