export default defineEventHandler((event) => {
    if (event.path.startsWith('/api')) {
        console.log(
            `${event.method} - ${getRequestURL(event)} - ${new Date(Date.now()).toLocaleString()}`,
        );
    }
});
