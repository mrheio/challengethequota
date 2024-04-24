import { Argon2id } from 'oslo/password';

export const hashPassword = async (password: string) => {
    return await new Argon2id().hash(password);
};

export const checkPasswords = async (hashed: string, password: string) => {
    return await new Argon2id().verify(hashed, password);
};
