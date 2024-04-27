export const UnauthorizedError = () =>
    createError({
        statusCode: 401,
        statusMessage: 'Unauthorized',
    });

export const InvalidAuthorizationHeaderError = () =>
    createError({
        statusCode: 401,
        statusMessage:
            'Need to pass valid Bearer-authorization header to access this endpoint',
    });
