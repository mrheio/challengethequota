import type { InferSelectModel } from 'drizzle-orm';
import type { posts } from './db/schema';

export type Post = InferSelectModel<typeof posts>;
