<script setup lang="ts">
const props = defineProps<{
    post: any;
    hideBody?: boolean;
    horizontal?: boolean;
}>();
</script>

<template>
    <Card fluid :href="`/posts/${props.post.id}`" v-bind="{ ...props }">
        <div v-if="!props.horizontal">
            <img
                :src="props.post.image_url"
                alt="{{ props.post.title }}"
                class="card-post__img"
            />
            <h3>{{ props.post.title }}</h3>
            <p v-if="!props.hideBody" class="text-preview">
                {{ props.post.body }}
            </p>
            <small>
                {{ new Date(props.post.created_at).toLocaleString() }}
            </small>
        </div>

        <div v-if="props.horizontal" class="post-card__layout--horizontal">
            <img
                :src="props.post.image_url"
                alt="{{ props.post.title }}"
                class="card-post__img"
            />
            <div>
                <h3>{{ props.post.title }}</h3>
                <p v-if="!props.hideBody" class="text-preview">
                    {{ props.post.body }}
                </p>
                <small>
                    {{ new Date(props.post.created_at).toLocaleString() }}
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
