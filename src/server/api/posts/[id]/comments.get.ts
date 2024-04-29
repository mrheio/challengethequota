import { db } from '~/db';

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');

    const comments = await db.query.comments.findMany({
        where: (model, { eq }) => eq(model.postId, Number(id)),
    });

    return { items: comments };
});
