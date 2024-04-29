<script setup lang="ts">
definePageMeta({ middleware: ['protected', 'admin'], layout: 'admin' });

const { data: posts } = await useFetch('/api/posts');

const deletePost = async (id: number) => {
    await $fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        onResponse: async () => {
            await refreshNuxtData();
        },
    });
};
</script>

<template>
    <div class="container">
        <div>
            <NuxtLink href="/admin/posts/create">Add a new post</NuxtLink>
        </div>
        <div v-for="post in posts?.items">
            <NuxtLink :href="`/admin/posts/${post.id}`">
                {{ post.title }}</NuxtLink
            >
            <button @click="() => deletePost(post.id)">Delete</button>
        </div>
    </div>
</template>
