import { db } from '~/db';
import { checkPasswords, signJWT } from '~/server/utils/auth';
import { UnauthorizedError } from '~/server/utils/errors';
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

    const payload = {
        user: {
            username: user.username,
            role: user.role,
        },
    };

    const [accessToken, refreshToken] = signJWT(event, payload);

    return { accessToken, refreshToken };
});
