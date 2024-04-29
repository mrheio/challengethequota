<script setup lang="ts">
const route = useRoute();

const { data } = await useFetch(`/api/posts/${route.params.id}`);
</script>

<template>
    <div v-if="data?.post" class="container post-details">
        <h1>{{ data.post.title }}</h1>
        <small
            >Posted at
            {{ new Date(data.post.createdAt).toLocaleString() }}</small
        >

        <img
            :src="data.post.imageUrl ?? ''"
            :alt="data.post.title"
            class="post-details__img"
        />

        <p class="post-details__body">{{ data.post.body }}</p>

        <ListOfComments />
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
