<script setup lang="ts">
import type { InputTypeHTMLAttribute } from 'vue';

const props = defineProps<{
    label?: string;
    id?: string;
    name: string;
    type?: InputTypeHTMLAttribute;
    placeholder?: string;
}>();

const { value, errorMessage } = useField(() => props.name);
</script>

<template>
    <div class="input-container" :class="{ error: !!errorMessage }">
        <label v-if="label" :for="id ?? name">{{ label }}</label>
        <input
            v-model="value"
            :type="type"
            :id="id ?? name"
            :name="name"
            :placeholder="placeholder"
        />
        <p v-show="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
</template>

<style scoped>
.input-container {
    display: grid;
}

.input-container label {
    margin-bottom: 0.25rem;
    font-weight: 500;
}

.input-container input {
    padding: 1rem 0.75rem;

    color: var(--clr-text);

    background-color: color-mix(in srgb, var(--clr-bg-dark) 35%, transparent);
    border: 2px solid var(--clr-bg-dark);
    border-radius: 4px;
    outline: none;
}

.input-container input:focus {
    background-color: color-mix(in srgb, var(--clr-bg-dark) 75%, transparent);
}

.input-container.error input {
    background-color: color-mix(in srgb, var(--clr-error) 35%, transparent);
    border: 2px solid var(--clr-error);
}

.input-container.error input:focus {
    background-color: color-mix(in srgb, var(--clr-error) 50%, transparent);
}

.input-container .error {
    margin-top: 0.5rem;
    color: var(--clr-error);
}
</style>
