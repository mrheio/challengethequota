export const UnauthorizedError = () =>
    createError({
        statusCode: 403,
        statusMessage: 'Unauthorized',
    });

export const InvalidAuthorizationHeaderError = () =>
    createError({
        statusCode: 403,
        statusMessage:
            'Need to pass valid Bearer-authorization header to access this endpoint',
    });
