import * as argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { db } from '~/db';
import { loginRequestUserSchema } from '~/validation';

export default defineEventHandler(async (event) => {
    const { authSecret } = useRuntimeConfig(event);
    const body = await readBody(event);
    const result = loginRequestUserSchema.safeParse(body);

    if (!result.success) {
        throw createError({ statusCode: 403, statusMessage: 'Unauthorized' });
    }

    const user = await db.query.users.findFirst({
        where: (users, { eq }) => eq(users.username, result.data.username),
    });

    if (!user) {
        throw createError({ statusCode: 403, statusMessage: 'Unauthorized' });
    }

    const doPasswordsMatch = await argon2.verify(
        user.password,
        result.data.password,
    );

    if (!doPasswordsMatch) {
        throw createError({ statusCode: 403, statusMessage: 'Unauthorized' });
    }

    const payload = {
        user: {
            username: user.username,
        },
    };

    const refreshToken =
        Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1;
    const accessToken = jwt.sign(payload, authSecret, { expiresIn: '2m' });

    return { accessToken, refreshToken };
});
