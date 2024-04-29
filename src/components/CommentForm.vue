<script setup lang="ts">
import { insertCommentRequestSchema } from '~/validation';

const route = useRoute();

const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(insertCommentRequestSchema),
});

const createComment = handleSubmit(async (values) => {
    console.log(values);

    await $fetch('/api/comments', {
        method: 'POST',
        body: {
            body: values.body,
            postId: route.params.id,
        },
        onResponse: async () => {
            await refreshNuxtData();
        },
    });
});
</script>

<template>
    <form @submit="createComment">
        <Input name="body" placeholder="I really really really ..." />
        <button type="submit">Comment</button>
    </form>
</template>
