<template>
    <nav class="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
        <div class="flex flex-wrap justify-between items-center">
            <div class="flex justify-start items-center">
                <button  @click="useNavigation.toggleSideBarMenu()" aria-controls="drawer-navigation"
                    class="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <svg aria-hidden="true" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Toggle sidebar</span>
                </button>
                <RouterLink :to="{ name: 'Home' }" class="flex items-center justify-between mr-4">
                    <img src="icon-leaf.png" class="mr-3 h-8" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-bold whitespace-nowrap dark:text-white">IBMS</span>
                </RouterLink>

            </div>
            <div class="flex items-center lg:order-2">
                <button type="button" class="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                    <span class="sr-only">Toggle Dark Mode</span>
                    <!-- Bell icon -->
                    <MoonIcon class="w-6 h-6" @click="useSystem.toggleDarkMode()"/>
                </button>

                <NotificationDropDown v-if="authStore.user"/>
                <UserDropDown v-if="authStore.user"/>
                
            </div>
        </div>
    </nav>
</template>

<script setup>
import { SunIcon, MoonIcon, BellIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
import { useNavigationStore } from '../../stores/navigation'
import { useSystemStore } from '../../stores/system'
import { onMounted, ref } from 'vue'
import NotificationDropDown from './NotificationDropDown.vue'
import UserDropDown from './UserDropDown.vue'

import { useAuthStore } from '../../stores/auth';

const authStore = useAuthStore()
const useNavigation = useNavigationStore()
const useSystem = useSystemStore()
const showUserMenu = ref(false);
onMounted(() => {
    useNavigation.hideSideBarMenu()
})

</script>