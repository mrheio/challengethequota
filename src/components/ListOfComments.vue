<script setup lang="ts">
const route = useRoute();
const { data, pending } = await useFetch(
    `/api/posts/${route.params.id}/comments`,
);
</script>

<template>
    <div>
        <CommentForm />
        <ul>
            <li v-for="comment in data?.items">
                <Comment :comment="comment" />
            </li>
        </ul>
    </div>
</template>
