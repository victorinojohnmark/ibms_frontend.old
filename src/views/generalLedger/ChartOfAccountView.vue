<script setup>
import { useToast } from 'vue-toastification';

const toast = useToast()

const showNotif = () => {
    toast.success('Hey, this is Chart of Accounts module', { position: 'top-right' })
}


</script>

<template>
    <div class="bg-white py-10 rounded-lg border shadow-sm border-gray-200">
        <div class="mx-auto max-w-7xl">
            <div class="px-4 sm:px-6">
                <div class="sm:flex sm:items-center">
                    <div class="flex-auto">
                        <h1 class=" text-base font-semibold leading-6 text-gray-900">Chart of Accounts</h1>
                        <p class="mt-2 text-sm text-gray-700">Streamline financial tracking with a comprehensive list of categorized accounts for accurate record-keeping</p>
                    </div>
                    <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button @click="showNotif" class="inline-block rounded-md bg-green-600 px-3 mx-1 py-2 text-center text-sm font-semibold text-white">Add Account</button>
                        <button class="inline-block rounded-md bg-green-600 px-3 mx-1 py-2 text-center text-sm font-semibold text-white">Import</button>
                    </div>
                </div>

                <div class="mt-4 flow-root">
                    <div class="mx-4 -my-2 overflow-x-auto sm:-mx-6">
                        <div class="inline-block min-w-full py-2 align-middle sm:px-6">
                            
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
</div>

                            <!-- <table class="min-w-full">
                                <thead class=" border-b-2 border-gray-200">
                                    <tr>
                                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Account No.</th>
                                        <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">Description</th>
                                        <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">Type</th>
                                        <th scope="col" class="relative py-3.5 pl-3 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0"><span class="sr-only"></span></th>
                                    </tr>
                                </thead>
                                <tbody class="border-y border-b-0">
                                    <tr class="border-t border-gray-200">
                                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">1010</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-600">Checking Account</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-600">Current Asset</td>
                                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-0">
                                            <a href="#" class="text-green-600 hover:text-green-900">Edit</a>
                                        </td>
                                    </tr>
                                    <tr class="border-t border-gray-200">
                                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">1010</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-600">Checking Account</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-600">Current Asset</td>
                                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-0">
                                            <a href="#" class="text-green-600 hover:text-green-900">Edit</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>