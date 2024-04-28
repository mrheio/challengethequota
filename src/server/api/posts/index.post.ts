import { db } from '~/db';
import { posts } from '~/db/schema';
import { UnauthorizedError } from '~/server/errors';
import { insertPostSchema } from '~/validation';

export default defineEventHandler(async (event) => {
    const user = event.context.user;

    if (!user) {
        throw UnauthorizedError();
    }

    const body = await readBody(event);
    const data = { ...body, createdBy: user.id };
    const result = insertPostSchema.safeParse(data);

    if (!result.success) {
        throw createError({ statusCode: 400, message: 'Invalid body' });
    }

    const post = result.data;

    const inserted = await db.insert(posts).values(post).returning();

    setResponseStatus(event, 201);
    setHeader(event, 'Location', `/posts/${inserted[0].id}`);

    return { items: inserted };
});
