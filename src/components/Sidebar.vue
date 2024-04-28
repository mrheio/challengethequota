<script setup lang="ts">
defineProps({
    title: String,
    description: String,
});
</script>

<template>
    <DialogRoot>
        <DialogPortal>
            <DialogOverlay class="sidebar__overlay" />
            <DialogContent class="sidebar__content">
                <VisuallyHidden as-child>
                    <DialogTitle v-if="title">Admin sidebar</DialogTitle>
                </VisuallyHidden>

                <VisuallyHidden as-child>
                    <DialogDescription v-if="description"
                        >Sidebar containing the available admin
                        panels</DialogDescription
                    >
                </VisuallyHidden>

                <slot />
            </DialogContent>
        </DialogPortal>
    </DialogRoot>
</template>

<style>
.sidebar__overlay {
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: rgba(0 0 0 / 0.4);
}

.sidebar__content {
    position: fixed;
    z-index: 30;
    top: 0;
    right: 0;
    bottom: 0;

    width: min(512px, 80%);
    padding: 2rem;

    color: var(--clr-text);

    background-color: var(--clr-bg);
}
</style>
