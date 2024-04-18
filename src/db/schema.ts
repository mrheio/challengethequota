import {
    integer,
    pgTable,
    serial,
    text,
    timestamp,
    varchar,
} from 'drizzle-orm/pg-core';

export const posts = pgTable('posts', {
    id: serial('id').primaryKey(),
    title: varchar('name', { length: 256 }).notNull().unique(),
    body: text('body').notNull(),
    createdAt: timestamp('created_at').defaultNow(),
});

export const tags = pgTable('tags', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull().unique(),
});

export const postsToTags = pgTable('postsToTags', {
    postId: integer('post_id')
        .notNull()
        .references(() => posts.id),
    tagId: integer('tag_id')
        .notNull()
        .references(() => tags.id),
});
