<script setup lang="ts">
import { NuxtLink } from '#components';

const props = defineProps<{ fluid?: boolean; href?: string }>();
</script>

<template>
    <component
        :is="props.href !== undefined ? NuxtLink : 'div'"
        class="card shadow"
        :class="{ fluid: props.fluid }"
        v-bind="{ ...props }"
    >
        <slot />
    </component>
</template>

<style scoped lang="css">
.card {
    --clr-bg: var(--clr-bg-dark);

    display: block;

    max-width: 512px;
    padding: 1rem;

    background-color: var(--clr-bg);
    border-radius: 4px;

    transition: all 0.3s ease-in-out;
}

.light-mode .card {
    --clr-bg: var(--clr-bg-light);
}

.card:hover {
    translate: 0px -2px;
    scale: 100.25%;
}

.fluid {
    max-width: none;
}
</style>
