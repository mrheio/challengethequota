<script setup lang="ts">
const route = useRoute();

const post = {
    id: 'test',
    title: 'Blog post title 1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, odio. Eum corporis, odio aliquam aperiam ad magnam consequuntur tempora unde, minus voluptate sit dolor quia reiciendis dolore rerum amet doloremque quis fugiat laboriosam aspernatur ipsam beatae deleniti? Similique ipsum aliquid officia praesentium itaque? Velit voluptatem iusto saepe optio eligendi! Nostrum asperiores, voluptatum minus iure nulla error ex consequuntur debitis neque!',
    tags: ['politics', 'economics', 'trendy', 'usa', 'money laundry'],
    created_at: 1713191482,
    image_url:
        'https://images.pexels.com/photos/20860153/pexels-photo-20860153/free-photo-of-wave-in-a-sea-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
};
</script>

<template>
    <div class="container post-details">
        <h1>{{ post.title }}</h1>
        <small
            >Posted at {{ new Date(post.created_at).toLocaleString() }}</small
        >

        <img
            :src="post.image_url"
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
