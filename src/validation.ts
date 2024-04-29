import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';
import { comments, posts, users } from './db/schema';

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

export const insertPostSchema = createInsertSchema(posts, {
    title: (schema) => schema.title.min(3),
});

export const createPostRequestSchema = insertPostSchema.pick({
    title: true,
    body: true,
});

export const selectPostsRequestQueryParamsSchema = z.object({
    created_by: z
        .union([z.coerce.number(), z.array(z.coerce.number())])
        .optional(),
});

export const insertCommentSchema = createInsertSchema(comments);

export const insertCommentRequestSchema = insertCommentSchema.pick({
    body: true,
});
