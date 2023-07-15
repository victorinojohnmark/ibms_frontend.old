<template>
    <div class="bg-white py-5 rounded-lg border shadow-sm border-gray-200 dark:border-gray-700 dark:bg-gray-800">
        <div class="mx-auto max-w-7xl">
            <div class="px-6">
                <div class="sm:flex sm:items-start">
                    <div class="flex-auto">
                        <h1 class=" text-base font-semibold leading-6 text-gray-900 dark:text-white">Payees
                        </h1>
                        <p class="hidden md:block mt-2 text-sm text-gray-700 dark:text-gray-400">Tracking recipients of payments for accurate financial record-keeping.</p>
                    </div>
                    <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <BaseButton name="Add Payee"/>
                        <BaseButton name="Import"/>
                    </div>
                </div>

                <div class="mt-4 flow-root">
                    <div class="-my-2 sm:-mx-6 ">
                        <BaseLoading />

                        <!-- tables here -->
                    </div>
                </div>



                <div class="mt-4">
                    <div class="flex items-center justify-between mt-auto">
                        <!-- Pagination here -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButton from '../../../components/system/BaseButton.vue'
import BaseLoading from '../../../components/system/BaseLoading.vue'
</script>