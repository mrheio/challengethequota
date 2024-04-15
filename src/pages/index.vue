<script setup lang="ts">
const posts = [
    {
        title: 'Blog post title 1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, odio. Eum corporis, odio aliquam aperiam ad magnam consequuntur tempora unde, minus voluptate sit dolor quia reiciendis dolore rerum amet doloremque quis fugiat laboriosam aspernatur ipsam beatae deleniti? Similique ipsum aliquid officia praesentium itaque? Velit voluptatem iusto saepe optio eligendi! Nostrum asperiores, voluptatum minus iure nulla error ex consequuntur debitis neque!',
        tags: ['politics', 'economics', 'trendy', 'usa', 'money laundry'],
        created_at: 1713191482,
    },
    {
        title: 'Blog post title 1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, odio. Eum corporis, odio aliquam aperiam ad magnam consequuntur tempora unde, minus voluptate sit dolor quia reiciendis dolore rerum amet doloremque quis fugiat laboriosam aspernatur ipsam beatae deleniti? Similique ipsum aliquid officia praesentium itaque? Velit voluptatem iusto saepe optio eligendi! Nostrum asperiores, voluptatum minus iure nulla error ex consequuntur debitis neque!',
        tags: ['politics', 'economics', 'trendy', 'usa', 'money laundry'],
        created_at: 1713191482,
    },
    {
        title: 'Blog post title 1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, odio. Eum corporis, odio aliquam aperiam ad magnam consequuntur tempora unde, minus voluptate sit dolor quia reiciendis dolore rerum amet doloremque quis fugiat laboriosam aspernatur ipsam beatae deleniti? Similique ipsum aliquid officia praesentium itaque? Velit voluptatem iusto saepe optio eligendi! Nostrum asperiores, voluptatum minus iure nulla error ex consequuntur debitis neque!',
        tags: ['politics', 'economics', 'trendy', 'usa', 'money laundry'],
        created_at: 1713191482,
    },
    {
        title: 'Blog post title 1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, odio. Eum corporis, odio aliquam aperiam ad magnam consequuntur tempora unde, minus voluptate sit dolor quia reiciendis dolore rerum amet doloremque quis fugiat laboriosam aspernatur ipsam beatae deleniti? Similique ipsum aliquid officia praesentium itaque? Velit voluptatem iusto saepe optio eligendi! Nostrum asperiores, voluptatum minus iure nulla error ex consequuntur debitis neque!',
        tags: ['politics', 'economics', 'trendy', 'usa', 'money laundry'],
        created_at: 1713191482,
    },
];
</script>

<template>
    <header>
        <div class="header">
            <div class="container header__layout">
                <div>
                    <img
                        src="https://images.pexels.com/photos/20860153/pexels-photo-20860153/free-photo-of-wave-in-a-sea-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="{{ posts[0].title }}"
                    />
                    <h3>{{ posts[0].title }}</h3>
                    <p>{{ posts[0].body }}</p>
                    <p>
                        {{ new Date('2023-01-22 00:00:00').toLocaleString() }}
                    </p>
                </div>
                <div>
                    <div>
                        <img
                            src="https://images.pexels.com/photos/20860153/pexels-photo-20860153/free-photo-of-wave-in-a-sea-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="{{ posts[1].title }}"
                        />
                        <h3>{{ posts[1].title }}</h3>
                        <p>
                            {{
                                new Date('2023-01-22 00:00:00').toLocaleString()
                            }}
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://images.pexels.com/photos/20860153/pexels-photo-20860153/free-photo-of-wave-in-a-sea-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="{{ posts[2].title }}"
                        />
                        <h3>{{ posts[2].title }}</h3>
                        <p>
                            {{
                                new Date('2023-01-22 00:00:00').toLocaleString()
                            }}
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://images.pexels.com/photos/20860153/pexels-photo-20860153/free-photo-of-wave-in-a-sea-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="{{ posts[3].title }}"
                        />
                        <h3>{{ posts[3].title }}</h3>
                        <p>
                            {{
                                new Date('2023-01-22 00:00:00').toLocaleString()
                            }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <main role="main" class="main">
        <div class="container">
            <div>
                <img
                    src="https://images.pexels.com/photos/20860153/pexels-photo-20860153/free-photo-of-wave-in-a-sea-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="{{ posts[3].title }}"
                />
                <h3>{{ posts[0].title }}</h3>
                <p>
                    {{ new Date('2023-01-22 00:00:00').toLocaleString() }}
                </p>
                <p>{{ posts[0].body }}</p>
            </div>
            <div>
                <img
                    src="https://images.pexels.com/photos/20860153/pexels-photo-20860153/free-photo-of-wave-in-a-sea-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="{{ posts[3].title }}"
                />
                <h3>{{ posts[0].title }}</h3>
                <p>
                    {{ new Date('2023-01-22 00:00:00').toLocaleString() }}
                </p>
                <p class="text-preview">{{ posts[0].body }}</p>
            </div>
            <div>
                <img
                    src="https://images.pexels.com/photos/20860153/pexels-photo-20860153/free-photo-of-wave-in-a-sea-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="{{ posts[3].title }}"
                />
                <h3>{{ posts[0].title }}</h3>
                <p>
                    {{ new Date('2023-01-22 00:00:00').toLocaleString() }}
                </p>
                <p class="text-preview">{{ posts[0].body }}</p>
            </div>
        </div>
    </main>
</template>

<style scoped>
.header {
    min-height: 80vh;
}

.header__layout {
    display: grid;
    gap: 2rem;
    grid-template-columns: 3fr 1fr;
}

.main {
    padding: 1rem;
}
</style>
