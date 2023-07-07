<template>
    <button type="button" @click="showDropDown = !showDropDown" class="flex mx-3 text-sm bg-white text-gray-500 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false">
        <span class="sr-only">Open user menu</span>
        <UserCircleIcon class="w-8 h-8 rounded-full"/>
    </button>
    <!-- Dropdown menu -->
    <div class="block absolute right-0 top-10 z-50 my-4 w-56 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl" :class="{ 'hidden': !showDropDown }" @mouseleave="showDropDown = false">
        <div class="py-3 px-4">
            <span class="block text-sm font-semibold text-gray-900 dark:text-white">{{ authStore.user.data.name }}</span>
            <span class="block text-sm text-gray-900 truncate dark:text-white">{{ authStore.user.data.email }}</span>
        </div>
        <ul class="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">
            <li>
                <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My profile</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Account settings</a>
            </li>
        </ul>
        <ul class="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">
            <li>
                <a href="#" @click.prevent="authStore.handleLogout()" class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Log out</a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth'
import { UserCircleIcon } from '@heroicons/vue/24/solid'

const authStore = useAuthStore()

const showDropDown = ref(false)
</script>