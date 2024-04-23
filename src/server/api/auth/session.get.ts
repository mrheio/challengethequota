import { verifyJWT } from '~/server/utils/auth';

export default defineEventHandler((event) => {
    const user = verifyJWT(event);
    return user;
});
