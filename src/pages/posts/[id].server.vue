<script setup lang="ts">
import { db } from '~/db';

const route = useRoute();
const post = await db.query.posts.findFirst({
    where: (posts, { eq }) => eq(posts.id, parseInt(route.params.id as string)),
});
</script>

<template>
    <div v-if="post" class="container post-details">
        <h1>{{ post.title }}</h1>
        <small>Posted at {{ new Date(post.createdAt).toLocaleString() }}</small>

        <img
            :src="post.imageUrl ?? ''"
            :alt="post.title"
            class="post-details__img"
        />
        <p class="post-details__body">{{ post.body }}</p>
    </div>
</template>

<style scoped>
.post-details {
    padding: 1.5rem 0rem;
}

.post-details__img {
    margin-top: 2rem;
}

.post-details__body {
    margin-top: 2rem;
}
</style>
