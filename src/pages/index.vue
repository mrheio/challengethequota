<script setup lang="ts">
const post = {
    title: 'Blog post title 1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, odio. Eum corporis, odio aliquam aperiam ad magnam consequuntur tempora unde, minus voluptate sit dolor quia reiciendis dolore rerum amet doloremque quis fugiat laboriosam aspernatur ipsam beatae deleniti? Similique ipsum aliquid officia praesentium itaque? Velit voluptatem iusto saepe optio eligendi! Nostrum asperiores, voluptatum minus iure nulla error ex consequuntur debitis neque!',
    tags: ['politics', 'economics', 'trendy', 'usa', 'money laundry'],
    created_at: 1713191482,
    image_url:
        'https://images.pexels.com/photos/20860153/pexels-photo-20860153/free-photo-of-wave-in-a-sea-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
};
</script>

<template>
    <header>
        <div class="header">
            <div class="container header__layout">
                <Card fluid>
                    <img :src="post.image_url" alt="{{ post.title }}" />
                    <h3>{{ post.title }}</h3>
                    <p>{{ post.body }}</p>
                    <p>
                        {{ new Date('2023-01-22 00:00:00').toLocaleString() }}
                    </p>
                </Card>
                <div class="header__aside">
                    <Card fluid v-for="item in new Array(3)">
                        <img :src="post.image_url" alt="{{ post.title }}" />
                        <h3>{{ post.title }}</h3>
                        <p>
                            {{
                                new Date('2023-01-22 00:00:00').toLocaleString()
                            }}
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    </header>
    <main role="main" class="main">
        <div class="container main__layout">
            <Card :fluid="true" v-for="item in new Array(6)">
                <div class="post-card__layout">
                    <img :src="post.image_url" alt="{{ post.title }}" />
                    <div>
                        <h3>{{ post.title }}</h3>
                        <p>
                            {{
                                new Date('2023-01-22 00:00:00').toLocaleString()
                            }}
                        </p>
                        <p class="text-preview">{{ post.body }}</p>
                    </div>
                </div>
            </Card>
        </div>
    </main>
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
