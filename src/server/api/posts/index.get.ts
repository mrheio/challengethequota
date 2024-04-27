import { db } from '~/db';
import { selectPostsRequestQueryParamsSchema } from '~/validation';

export default defineEventHandler(async (event) => {
    const queryParams = await getValidatedQuery(
        event,
        selectPostsRequestQueryParamsSchema.parse,
    );

    let query: Parameters<typeof db.query.posts.findMany>[0] = {};
    if (typeof queryParams.created_by !== 'undefined') {
        const createdBy = [
            ...(typeof queryParams.created_by === 'number'
                ? [queryParams.created_by]
                : queryParams.created_by),
        ];
        query = {
            ...query,
            where: (posts, { inArray }) => inArray(posts.id, createdBy),
        };
    }

    const posts = await db.query.posts.findMany(query);
    return { items: posts };
});
