<script setup>
import { useNavigationStore } from '../../stores/navigation'

const useNavigation = useNavigationStore()
const props = defineProps({
    routeName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    icon: {
        type: Function,
        required: true
    }
})

</script>

<template>
    <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: routeName }" class="w-full text-sm font-normal rounded-lg hover:bg-gray-100 focus:bg-gray-100 flex flex-col items-center justify-start p-3 group dark:text-gray-200 dark:hover:bg-gray-700">
        <div class="flex w-full group-focus:bg-gray-100 ">
            <span class="text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white font-semibold whitespace-nowrap">
                <component :is="icon" class="w-6 h-6 inline mr-2 text-gray-500 group-hover:text-green-600 dark:group-hover:text-green-400"/>
                
                {{  title }}
            </span>
        </div>  
    </RouterLink>
</template>

