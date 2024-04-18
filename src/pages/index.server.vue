<script setup lang="ts">
import { db } from '~/db';

const post = {
    id: 'test',
    title: 'Blog post title 1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, odio. Eum corporis, odio aliquam aperiam ad magnam consequuntur tempora unde, minus voluptate sit dolor quia reiciendis dolore rerum amet doloremque quis fugiat laboriosam aspernatur ipsam beatae deleniti? Similique ipsum aliquid officia praesentium itaque? Velit voluptatem iusto saepe optio eligendi! Nostrum asperiores, voluptatum minus iure nulla error ex consequuntur debitis neque!',
    tags: ['politics', 'economics', 'trendy', 'usa', 'money laundry'],
    created_at: 1713191482,
    image_url:
        'https://images.pexels.com/photos/20860153/pexels-photo-20860153/free-photo-of-wave-in-a-sea-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
};

const posts = await db.query.posts.findMany();
console.log(posts);
</script>

<template>
    <div>
        <div v-for="post in posts">{{ post.title }}</div>
        <header>
            <div class="header">
                <div class="container header__layout">
                    <CardPost :post="post" />
                    <div class="header__aside">
                        <CardPost
                            :post="post"
                            hide-body
                            v-for="item in new Array(3)"
                        />
                    </div>
                </div>
            </div>
        </header>
        <main role="main" class="main">
            <div class="container main__layout">
                <CardPost
                    :post="post"
                    horizontal
                    v-for="item in new Array(6)"
                />
            </div>
        </main>
    </div>
</template>

<style scoped>
.header {
    padding: 1rem;
}

.header__layout {
    display: grid;
    gap: 2rem;
}

.header__aside {
    display: grid;
    gap: 2rem;
}

@media screen and (min-width: 1024px) {
    .header__layout {
        grid-template-columns: 3fr 1fr;
    }
}

.main {
    padding: 1rem;
}

.main__layout {
    display: grid;
    gap: 2rem;
}

@media screen and (min-width: 1024px) {
    .post-card__layout {
        display: flex;
        gap: 4rem;
    }

    .post-card__layout img {
        max-width: 240px;
    }
}
</style>
