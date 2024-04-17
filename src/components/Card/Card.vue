<script setup lang="ts">
import { NuxtLink } from '#components';

const props = defineProps<{ fluid?: boolean; href?: string }>();
</script>

<template>
    <component
        :is="props.href !== undefined ? NuxtLink : 'div'"
        class="card"
        :class="{ fluid: props.fluid }"
        v-bind="{ ...props }"
    >
        <slot />
    </component>
</template>

<style scoped lang="css">
.card {
    display: block;

    max-width: 512px;
    padding: 1rem;

    border-radius: 4px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    transition: all 0.3s ease-in-out;
}

.card:hover {
    translate: 0px -2px;
    scale: 100.25%;
}

.fluid {
    max-width: none;
}
</style>
