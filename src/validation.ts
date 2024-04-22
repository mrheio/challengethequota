import { createInsertSchema } from 'drizzle-zod';
import { users } from './db/schema';

export const insertUserSchema = createInsertSchema(users, {
    email: (schema) => schema.email.email(),
    username: (schema) => schema.username.min(3),
    password: (schema) => schema.password.min(8),
});

export const loginRequestUserSchema = createInsertSchema(users).pick({
    username: true,
    password: true,
});

export const registerRequestUserSchema = insertUserSchema.pick({
    email: true,
    username: true,
    password: true,
});
