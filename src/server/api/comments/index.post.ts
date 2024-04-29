import { db } from '~/db';
import { comments } from '~/db/schema';
import { UnauthorizedError } from '~/server/errors';

export default defineEventHandler(async (event) => {
    const user = event.context.user;

    if (!user) {
        throw UnauthorizedError();
    }

    const body = await readBody(event);
    const comment = { ...body, createdBy: user.username };

    try {
        const insertRes = await db.insert(comments).values(comment).returning();

        return { items: insertRes };
    } catch (err) {
        throw err;
    }
});
