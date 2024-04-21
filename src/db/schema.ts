import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

const unixepoch = sql`(unixepoch())`;

export const users = sqliteTable('users', {
    id: integer('id').primaryKey(),
    username: text('username').notNull().unique(),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' })
        .notNull()
        .default(unixepoch),
});

export const posts = sqliteTable('posts', {
    id: integer('id').primaryKey(),
    title: text('name').notNull().unique(),
    body: text('body').notNull(),
    imageUrl: text('image_url'),
    createdAt: integer('created_at', { mode: 'timestamp' })
        .notNull()
        .default(unixepoch),
});

export const tags = sqliteTable('tags', {
    id: integer('id').primaryKey(),
    name: text('name').notNull().unique(),
});

export const postsToTags = sqliteTable('postsToTags', {
    postId: integer('post_id')
        .notNull()
        .references(() => posts.id),
    tagId: integer('tag_id')
        .notNull()
        .references(() => tags.id),
});
