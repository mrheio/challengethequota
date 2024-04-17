<script setup lang="ts">
const props = defineProps<{ fluid?: boolean }>();
</script>

<template>
    <div class="card" :class="{ fluid: props.fluid }">
        <slot />
    </div>
</template>

<style scoped lang="css">
.card {
    overflow: hidden;

    max-width: 512px;
    padding: 1rem;

    border-radius: 4px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.fluid {
    max-width: none;
}
</style>
