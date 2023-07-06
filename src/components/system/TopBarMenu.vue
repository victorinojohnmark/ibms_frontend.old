<template>
    <nav class="flex items-center bg-white border-b border-gray-200 fixed z-30 h-16 w-full">
        <div class="w-full px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start">
                    <button v-if="authStore.user" id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" @click="useNavigation.toggleSideBarMenu()"
                        class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                        <svg v-if="!useNavigation.sideBarMenuVisibility" id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg v-else id="toggleSidebarMobileClose" class="w-6 h-6" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <RouterLink :to="{ name: 'Home' }" class="text-xl font-bold flex items-center lg:ml-2.5">
                        <img src="/icon-leaf.png" class="h-6 mr-2"
                            alt="Windster Logo">
                        <span class="self-center whitespace-nowrap">IBMS</span>
                    </RouterLink>
                    <!-- <form action="#" method="GET" class="hidden lg:block lg:pl-32">
                        <label for="topbar-search" class="sr-only">Search</label>
                        <div class="mt-1 relative lg:w-64">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input type="text" name="email" id="topbar-search"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                                placeholder="Search">
                        </div>
                    </form> -->
                </div>
                <div class="flex gap-x-2 items-center justify-items-center">
                    <button v-if="authStore.user" class="text-gray-600 hover:text-green-600 hover:cursor-pointer">
                        <BellIcon class="w-6 h-6" />
                    </button>

                    <!-- <button class="text-gray-600 hover:text-green-600 hover:cursor-pointer">
                        <MoonIcon class="w-6 h-6" />
                    </button> -->

                    <div v-if="authStore.user" class="flex flex-row items-center gap-x-2 text-right text-gray-600 hover:text-green-600 hover:cursor-pointer group" @click="showUserMenu = !showUserMenu" @focusout="showUserMenu = false">
                        <p class="text-sm lg:inline group-hover:text-gray-700 hidden">John Mark Victorino</p>
                        <UserCircleIcon class="w-7 h-7" />
                        <ul class="absolute z-50 top-3 lg:top-0 right-4 bg-white border border-gray-200 rounded-md shadow-sm py-2 mt-12" v-if="showUserMenu" @mouseleave="showUserMenu = false">
                            <li><button @click="authStore.handleLogout()" class="w-full text-sm text-gray-600 px-4 py-2 hover:bg-gray-200 cursor-pointer">Logout</button></li>
                        </ul>
                    </div>

                    
                    

                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { SunIcon, MoonIcon, BellIcon, UserCircleIcon } from '@heroicons/vue/24/solid';
import { useNavigationStore } from '../../stores/navigation'
import { onMounted, ref } from 'vue';

import { useAuthStore } from '../../stores/auth';

const authStore = useAuthStore()
const useNavigation = useNavigationStore()
const showUserMenu = ref(false);
onMounted(() => {
    useNavigation.hideSideBarMenu()
})

</script>