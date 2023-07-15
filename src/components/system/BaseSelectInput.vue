<template>
    <div class="mb-3">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ label }}</label>
        <select :value="modelValue" @input="handleInput" placeholder="Select here..." :required="required"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 focus-visible:outline-green-600">
        <option value="" disabled selected>Select type here</option>
        <option v-if="options.length" v-for="option in options" :value="getValue(option)">{{ getLabel(option) }}</option>
        </select>
        <p v-if="error !== null" class="mt-2 text-xs font-semibold text-red-400">{{ error }}</p>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    options: {
        type: Array,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    modelValue: {
        type: [String, Number],
        required: true
    },
    required: {
        type: Boolean,
        default: true
    },
    error: {
        type: String,
        default: null
    },
    class: {
        type: String,
        default: ''
    }
})

const getValue = (data) => {
    if(typeof data == 'object') {
        return Object.values(data)[0]
    } else {
        return data
    }
}

const getLabel = (data) => {
    if(typeof data == 'object') {
        return Object.values(data)[1]
    } else {
        return data
    }
}

const emit = defineEmits(['update:modelValue'])

const handleInput = (event) => {
    emit('update:modelValue', event.target.value)
}

</script>