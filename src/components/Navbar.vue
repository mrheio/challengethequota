<script setup lang="ts">
const route = useRoute();
const [, toggleSidebar] = useSidebar();

const colorMode = useColorMode();

const toggleColorMode = () => {
    if (colorMode.preference === 'dark') {
        colorMode.preference = 'light';
    } else {
        colorMode.preference = 'dark';
    }
};

const user = useUser();

const logout = async () => {
    await $fetch('/api/auth/logout', { method: 'POST' });
    reloadNuxtApp();
};
</script>

<template>
    <nav class="nav">
        <div class="container nav__layout">
            <div class="nav__logo">
                <NuxtLink href="/">ctq</NuxtLink>
            </div>

            <div>
                <button v-if="user" @click="logout">
                    {{ user.username }} - Sign Out
                </button>

                <NuxtLink v-if="!user" href="/login"> Enter account </NuxtLink>

                <button
                    type="button"
                    @click="toggleColorMode"
                    class="nav__theme-btn"
                >
                    <Icon
                        :name="
                            $colorMode.value === 'light'
                                ? 'material-symbols:dark-mode'
                                : 'material-symbols:wb-sunny'
                        "
                        size="1.5em"
                    />
                </button>
                <NuxtLink
                    href="/admin"
                    class="nav__btn"
                    v-if="!route.path.includes('/admin')"
                >
                    <Icon
                        name="material-symbols:admin-panel-settings-rounded"
                        size="1.5em"
                    />
                </NuxtLink>

                <button
                    v-if="route.path.includes('/admin')"
                    type="button"
                    class="nav__btn"
                    @click="toggleSidebar"
                >
                    <Icon name="material-symbols:menu-rounded" size="1.5em" />
                </button>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.nav {
    position: sticky;
    z-index: 10;
    top: 0;

    width: 100%;
    padding: 0.5rem 1.5rem;

    background: transparent;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
}

.nav__layout {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
}

.nav__logo {
    font-size: 2rem;
    font-weight: bold;
}

.nav__btn {
    cursor: pointer;

    color: inherit;

    background-color: transparent;
    border: none;
    outline: none;
}

.nav__theme-btn {
    --clr-hover: #ecbb06;

    cursor: pointer;

    color: var(--clr-text);

    background-color: transparent;
    border: none;
    outline: none;

    transition: all 0.3s ease-in-out;
}

.nav__theme-btn:hover {
    color: var(--clr-hover);
}

.light-mode .nav__theme-btn:hover {
    --clr-hover: var(--clr-primary-400);
}
</style>
