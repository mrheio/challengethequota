import { db } from '~/db';
import { users } from '~/db/schema';
import { hashPassword } from '~/server/utils/auth';
import { UnauthorizedError } from '~/server/utils/errors';
import { registerRequestUserSchema } from '~/validation';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const result = registerRequestUserSchema.safeParse(body);

    if (!result.success) throw UnauthorizedError();

    const hashedPassword = await hashPassword(result.data.password);

    await db.insert(users).values({ ...result.data, password: hashedPassword });

    return;
});
