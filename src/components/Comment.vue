<script setup lang="ts">
const props = defineProps({
    comment: Object,
});

const update = ref(false);

const { values, defineField } = useForm({
    initialValues: { body: props.comment?.body },
});

const [body, bodyAttrs] = defineField('body');

const deletePost = async () => {
    await $fetch(`/api/comments/${props.comment?.id}`, {
        method: 'DELETE',
        onResponse: async () => {
            await refreshNuxtData();
        },
    });
};

const updatePost = async () => {
    await $fetch(`/api/comments/${props.comment?.id}`, {
        method: 'PATCH',
        body: values,
        onResponse: async () => {
            await refreshNuxtData();
            update.value = false;
        },
    });
};
</script>

<template>
    <p v-if="!update">{{ props.comment?.body }}</p>
    <template v-if="update">
        <Input name="body" v-model="body" v-bind="bodyAttrs" />
        <button @click="updatePost" v-if="update">Confirm Update</button>
    </template>
    <button @click="update = true" v-if="!update">Update</button>
    <button @click="deletePost">Delete</button>
</template>
