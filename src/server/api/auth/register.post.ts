import { db } from '~/db';
import { users } from '~/db/schema';
import { hashPassword } from '~/server/auth';
import { UnauthorizedError } from '~/server/errors';
import { lucia } from '~/server/lucia';
import { registerRequestUserSchema } from '~/validation';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const result = registerRequestUserSchema.safeParse(body);

    if (!result.success) throw UnauthorizedError();

    const hashedPassword = await hashPassword(result.data.password);

    const insertRes = await db
        .insert(users)
        .values({ ...result.data, password: hashedPassword })
        .returning();

    const session = await lucia.createSession(insertRes[0].id, {});
    appendHeader(
        event,
        'Set-Cookie',
        lucia.createSessionCookie(session.id).serialize(),
    );
    return;
});
