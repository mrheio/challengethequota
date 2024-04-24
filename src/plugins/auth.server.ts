export default defineNuxtPlugin(async () => {
    const user = useUser();
    const data = await useRequestFetch()('/api/auth/session');
    user.value = data;
});
