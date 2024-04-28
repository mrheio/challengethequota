<script setup lang="ts">
const route = useRoute();

const { data } = await useFetch(`/api/posts/${route.params.id}`);

const { handleSubmit, resetForm } = useForm({});

onMounted(async () => {
    resetForm({
        values: {
            title: data.value?.post?.title,
            body: data.value?.post?.body,
        },
    });
});

const updatePost = handleSubmit(async (values) => {
    await $fetch(`/api/posts/${data.value?.post?.id}`, {
        method: 'PATCH',
        body: values,
        onResponse: () => {
            navigateTo('/admin/posts');
        },
    });
});
</script>

<template>
    <form @submit="updatePost">
        <Input label="title" name="title" />
        <Input label="body" name="body" />
        <button type="submit">Update</button>
    </form>
</template>
