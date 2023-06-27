<template>
    <div class="w-full text-sm font-normal rounded-lg hover:bg-gray-100 flex flex-col items-center justify-start p-3 group cursor-pointer" @click="toggleDropdown" @mouseleave="isOpen = false" role="button">

        <button class="flex w-full items-center text-left text-gray-500 group-hover:text-gray-700 font-semibold">
            <slot name="icon"></slot>
            {{ name }}
            <ChevronDownIcon class="text-gray-500 ml-auto w-5 h-5 group-hover:text-gray-700" :class="{ 'rotate-180': isOpen }" />
        </button>
        
        <div @click="console.log('hello')" class="w-full">
            <slot v-if="isOpen"></slot>
        </div>
    </div>
</template> 
  
<script setup>
    import { ChevronDownIcon } from '@heroicons/vue/24/solid';
    import { ref } from 'vue'

    const isOpen = ref(false)
    const props = defineProps({
        name: {
            type: String,
            required: true
        }
    })

    const toggleDropdown = () => {
        isOpen.value = !isOpen.value
    }
  </script>