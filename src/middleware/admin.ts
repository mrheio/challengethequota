export default defineNuxtRouteMiddleware(async () => {
    const user = useUser();
    if (user.value!.role !== 'admin') {
        return navigateTo('/');
    }
});
