import { db } from '~/db';
import { UnauthorizedError } from '~/server/errors';

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');

    if (!id) {
        throw UnauthorizedError();
    }

    const post = await db.query.posts.findFirst({
        where: (model, { eq }) => eq(model.id, Number(id)),
    });

    return { post: post ?? null };
});
