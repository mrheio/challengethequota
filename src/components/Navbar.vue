<script setup lang="ts"></script>

<template>
    <nav class="nav">
        <div class="container">
            <div class="logo"><a href="#">challenge-the-quota</a></div>
        </div>
    </nav>
</template>

<style scoped>
.nav {
    position: sticky;
    top: 0;

    width: 100%;
    padding: 0.5rem 1.5rem;

    background: transparent;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
}

.logo {
    font-size: 2rem;
}
</style>
