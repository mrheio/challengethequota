<script setup lang="ts">
import { db } from '~/db';

const posts = await db.query.posts.findMany();
const [mainPost, sidePost1, sidePost2, sidePost3, ...otherPosts] = posts;
</script>

<template>
    <div>
        <header>
            <div class="header">
                <div class="container header__layout">
                    <CardPost v-if="mainPost" :post="mainPost" />
                    <div class="header__aside">
                        <CardPost
                            v-if="sidePost1"
                            :post="sidePost1"
                            hide-body
                        />
                        <CardPost
                            v-if="sidePost2"
                            :post="sidePost2"
                            hide-body
                        />
                        <CardPost
                            v-if="sidePost3"
                            :post="sidePost3"
                            hide-body
                        />
                    </div>
                </div>
            </div>
        </header>
        <main role="main" class="main">
            <div class="container main__layout">
                <CardPost v-for="post in otherPosts" :post="post" horizontal />
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

.empty {
    text-align: center;
}
</style>
