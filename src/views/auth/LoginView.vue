<script setup>
import { ArrowLongRightIcon, LockOpenIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth'

const authStore = useAuthStore()

const loginData = ref({
    email: '',
    password: ''
})

</script>

<template>
    <div class="container mx-auto flex lg:flex-row flex-col-reverse lg:mt-12">
        <div id="background-image" class="flex items-center justify-center lg:justify-end w-full lg:w-1/2">
            <img src="../../assets/img/stats_illustration.svg" class="w-1/2" alt="">
        </div>
        <div class="flex flex-col justify-center lg:justify-start sm:py-12 w-full lg:w-1/2">
            <div class="p-10 xs:p-0 mx-auto lg:mx-0 md:w-full md:max-w-md">
                <h1 class="flex items-center justify-center font-bold text-center text-2xl mb-5">
                    <img src="/icon-leaf.png" class="h-10 mr-2 inline" alt="Windster Logo">
                    <span>IBMS</span>
                </h1>
                <div class="bg-white shadow-lg w-full rounded divide-y divide-gray-200">
                    <div class="px-5 py-7">
                        <form action="#" method="POST" @submit.prevent="authStore.handleLogin(loginData)">
                            <div class="mb-5">
                                <label class="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                                <input type="email" v-model="loginData.email" class="border rounded py-2 px-3 mt-1 text-sm w-full" autocomplete="false"/>
                                <p v-if="authStore.errors && authStore.errors.email" class="mt-2 text-xs font-semibold text-red-400">{{ authStore.errors.email[0] }}</p>

                            </div>

                            <div class="mb-5">
                                <label class="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                                <input type="password" v-model="loginData.password" class="border rounded py-2 mt-1 px-3 text-sm w-full" autocomplete="false"/>
                                <p v-if="authStore.errors && authStore.errors.password" class="mt-2 text-xs font-semibold text-red-400">{{ authStore.errors.password[0] }}</p>
                            </div>

                            <button type="submit" class="transition duration-200 bg-green-500 hover:bg-green-600 focus:bg-green-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                <span class="inline-block mr-2">Login</span>
                                <ArrowLongRightIcon class="w-4 h-4 inline-block" />
                            </button>

                        </form>
                    </div>
                    <div class="py-5">
                        <div class="grid grid-cols-2 gap-1">
                            <div class="text-center sm:text-left whitespace-nowrap">
                                <button
                                    class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                    <LockOpenIcon class="w-4 h-4 inline-block align-text-top mr-1" />
                                    <span class="inline-block ml-1">Forgot Password</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>