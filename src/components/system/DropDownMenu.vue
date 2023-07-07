<template>
    <li class="my-1 w-full text-sm font-normal rounded-lg hover:bg-gray-100 flex flex-col items-center justify-start p-3 group cursor-pointer dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600" @click="toggleDropdown" @mouseleave="isOpen = false" role="button">
        <span class="flex w-full items-center text-left text-gray-500 group-hover:text-gray-900 font-semibold dark:group-hover:text-white">
            <component :is="icon" class="w-6 h-6 inline mr-2 text-gray-500 group-hover:text-green-600 dark:text-gray-400 dark:group-hover:text-green-400" />{{ name }}
            <ChevronDownIcon class="text-gray-500 ml-auto w-5 h-5 group-hover:text-gray-900" :class="{ 'rotate-180': isOpen }" />
        </span>
        <ul class="w-full block mt-2 text-left" v-if="isOpen">
            <li v-for="subMenu in subMenus" class="py-2">
                <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: subMenu.routeName }" class="w-full text-left block text-gray-500 font-semibold hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
                    <component :is="subMenu.icon" class="w-6 h-6 inline mr-3" />
                    <span>{{ subMenu.name }}</span>
                </RouterLink>
            </li>
        </ul>
    </li>
</template> 
  
<script setup>
    import { ChevronDownIcon } from '@heroicons/vue/24/solid';
    import { ref } from 'vue'
    import { useNavigationStore } from '../../stores/navigation';

    const useNavigation = useNavigationStore()

    const isOpen = ref(false)
    const props = defineProps({
        name: {
            type: String,
            required: true
        },
        icon: {
            type: Function,
            required: true
        },
        subMenus: {
            type: Object,
            required: true
        }
    })

    const toggleDropdown = () => {
        isOpen.value = !isOpen.value
    }
  </script>