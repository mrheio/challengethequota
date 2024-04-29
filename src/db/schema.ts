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
    role: text('role', { enum: ['normal', 'admin'] })
        .notNull()
        .default('normal'),
});

export const sessions = sqliteTable('sessions', {
    id: text('id').primaryKey(),
    userId: integer('user_id')
        .notNull()
        .references(() => users.id),
    expiresAt: integer('expires_at').notNull(),
});

export const posts = sqliteTable('posts', {
    id: integer('id').primaryKey(),
    title: text('name').notNull().unique(),
    body: text('body').notNull(),
    imageUrl: text('image_url'),
    createdAt: integer('created_at', { mode: 'timestamp' })
        .notNull()
        .default(unixepoch),
    createdBy: integer('created_by')
        .notNull()
        .references(() => users.id),
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

export const comments = sqliteTable('comments', {
    id: integer('id').primaryKey(),
    body: text('body').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' })
        .notNull()
        .default(unixepoch),
    createdBy: text('created_by')
        .notNull()
        .references(() => users.username),
    postId: integer('post_id')
        .notNull()
        .references(() => posts.id),
});
