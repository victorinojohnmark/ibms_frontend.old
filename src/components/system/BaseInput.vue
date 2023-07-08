<template>
    <div class="mb-3">
        <label v-if="label !== null" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ label }}</label>
        <input :value="modelValue" :type="type" :placeholder="placeholder" :required="required" :disabled="disabled" :readonly="readonly" :autocomplete="autocompelete" 
        @input="handleInput" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" >
        <p v-if="error !== null" class="mt-2 text-xs font-semibold text-red-400">{{ error }}</p>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue';
const props = defineProps({
    label: {
        type: String,
        required: false
    },
    type: {
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String,
        default: '...'
    },
    required: {
        type: Boolean,
        default: true
    },
    disabled: {
        type: Boolean,
        default: false
    },
    readonly: {
        type: Boolean,
        default: false
    },
    autocompelete: {
        type: Boolean,
        default: false
    },
    modelValue: {
        type: [String, Number],
        required: true
    },
    error: {
        type: String,
        default: null
    }
})

const emit = defineEmits(['update:modelValue'])

const handleInput = (event) => {
    emit('update:modelValue', event.target.value)
}

</script>