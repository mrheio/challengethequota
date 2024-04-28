import { eq } from 'drizzle-orm';
import { db } from '~/db';
import { posts } from '~/db/schema';
import { UnauthorizedError } from '~/server/errors';

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');

    if (!id) {
        throw UnauthorizedError();
    }

    const body = await readBody(event);

    const patchRes = await db
        .update(posts)
        .set(body)
        .where(eq(posts.id, Number(id)))
        .returning();

    return { items: patchRes };
});
