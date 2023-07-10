<template>
    <button type="button" :type="type" :disabled="disabled"
    class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
    {{ name }}
    </button>
</template>

<script setup>
    const props = defineProps({
        type: {
            type: String,
            default: "button"
        },
        name: {
            type: String,
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        }
    })
</script>