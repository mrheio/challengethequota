import * as argon2 from 'argon2';
import type { H3Event } from 'h3';
import jwt from 'jsonwebtoken';
import { InvalidAuthorizationHeaderError, UnauthorizedError } from './errors';

export const signJWT = <T extends string | object>(
    event: H3Event,
    payload: T,
) => {
    const { authSecret, authTokenMaxAge } = useRuntimeConfig(event);

    const refreshToken =
        Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1;
    const accessToken = jwt.sign(payload, authSecret, {
        expiresIn: authTokenMaxAge,
    });

    return [accessToken, refreshToken];
};

const TOKEN_TYPE = 'Bearer';

const extractToken = (authHeaderValue: string) => {
    const [, token] = authHeaderValue.split(`${TOKEN_TYPE} `);
    return token;
};

export const verifyJWT = (event: H3Event) => {
    const { authSecret } = useRuntimeConfig(event);
    const authHeaderValue = getRequestHeader(event, 'authorization');

    if (typeof authHeaderValue === 'undefined') {
        throw InvalidAuthorizationHeaderError();
    }

    const extractedToken = extractToken(authHeaderValue);

    try {
        return jwt.verify(extractedToken, authSecret);
    } catch (error) {
        throw UnauthorizedError();
    }
};

export const hashPassword = async (password: string) => {
    return await argon2.hash(password);
};

export const checkPasswords = async (hashed: string, password: string) => {
    return await argon2.verify(hashed, password);
};
