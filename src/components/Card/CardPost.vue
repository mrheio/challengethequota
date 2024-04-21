<script setup lang="ts">
import type { Post } from '~/types';

const props = defineProps<{
    post: Post;
    hideBody?: boolean;
    horizontal?: boolean;
}>();
</script>

<template>
    <Card fluid :href="`/posts/${post.id}`" v-bind="{ ...props }">
        <div v-if="!horizontal">
            <img
                :src="post.imageUrl ?? ''"
                :alt="post.title"
                class="card-post__img"
            />
            <h3>{{ post.title }}</h3>
            <p v-if="!hideBody" class="text-preview">
                {{ post.body }}
            </p>
            <small>
                {{ post.createdAt }}
            </small>
        </div>

        <div v-if="horizontal" class="post-card__layout--horizontal">
            <img src="" :alt="post.title" class="card-post__img" />
            <div>
                <h3>{{ post.title }}</h3>
                <p v-if="!hideBody" class="text-preview">
                    {{ post.body }}
                </p>
                <small>
                    {{ post.createdAt }}
                </small>
            </div>
        </div>
    </Card>
</template>

<style scoped>
@media screen and (min-width: 1024px) {
    .post-card__layout--horizontal {
        display: flex;
        gap: 2rem;
    }

    .post-card__layout--horizontal img {
        max-width: 240px;
    }
}
</style>
