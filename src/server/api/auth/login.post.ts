import { db } from '~/db';
import { checkPasswords } from '~/server/auth';
import { UnauthorizedError } from '~/server/errors';
import { lucia } from '~/server/lucia';
import { loginRequestUserSchema } from '~/validation';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const result = loginRequestUserSchema.safeParse(body);

    if (!result.success) throw UnauthorizedError();

    const user = await db.query.users.findFirst({
        where: (users, { eq }) => eq(users.username, result.data.username),
    });

    if (!user) throw UnauthorizedError();

    const doPasswordsMatch = await checkPasswords(
        user.password,
        result.data.password,
    );

    if (!doPasswordsMatch) throw UnauthorizedError();

    const session = await lucia.createSession(user.id, {});
    appendHeader(
        event,
        'Set-Cookie',
        lucia.createSessionCookie(session.id).serialize(),
    );
    return;
});
