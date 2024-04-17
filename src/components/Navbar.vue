<script setup lang="ts">
const colorMode = useColorMode();

const toggleColorMode = () => {
    if (colorMode.preference === 'dark') {
        colorMode.preference = 'light';
    } else {
        colorMode.preference = 'dark';
    }
};

watch(colorMode, (val) => {
    console.log(val);
});
</script>

<template>
    <nav class="nav">
        <div class="container nav__layout">
            <div class="nav__logo">
                <NuxtLink href="/">c-t-q</NuxtLink>
            </div>

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
