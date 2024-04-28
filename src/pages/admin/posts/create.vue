<script setup lang="ts">
definePageMeta({ middleware: ['protected'], layout: 'admin' });

import { createPostRequestSchema } from '~/validation';

const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(createPostRequestSchema),
});

const insertPost = handleSubmit(async (values) => {
    await $fetch('/api/posts', {
        method: 'POST',
        body: values,
        onResponse: () => {
            navigateTo('/admin/posts');
        },
    });
});
</script>

<template>
    <div class="container">
        <form @submit="insertPost">
            <h1>Create a new blog post</h1>
            <Input
                name="title"
                label="Title"
                placeholder="Title goes in here"
            />
            <Input
                name="body"
                label="Post Body"
                placeholder="Lorem Ipsum Dolor"
            />
            <button type="submit">Create Post</button>
        </form>
    </div>
</template>
