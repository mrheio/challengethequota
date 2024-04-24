import type { User } from 'lucia';

export const useUser = () => {
    const user = useState<User | null>('auth:user', () => null);
    return user;
};
