import * as argon2 from 'argon2';
import { db } from '~/db';
import { users } from '~/db/schema';
import { registerRequestUserSchema } from '~/validation';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const result = registerRequestUserSchema.safeParse(body);

    if (!result.success) {
        console.error(result.error);
        throw createError({ statusCode: 403, statusMessage: 'Unauthorized' });
    }

    const hashedPassword = await argon2.hash(result.data.password);

    await db.insert(users).values({ ...result.data, password: hashedPassword });

    return;
});
