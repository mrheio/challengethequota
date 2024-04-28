<script setup lang="ts">
const [isSidebarOpen] = useSidebar();
</script>

<template>
    <NuxtLayout name="default">
        <Sidebar
            v-model:open="isSidebarOpen"
            title="Admin sidebar"
            description="Sidebar test description to fill in the gap"
            ><ul>
                <li><NuxtLink href="/admin">Home</NuxtLink></li>
                <li><NuxtLink href="/admin/posts">Posts</NuxtLink></li>
            </ul></Sidebar
        >

        <slot />
    </NuxtLayout>
</template>
