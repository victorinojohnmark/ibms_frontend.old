<template>
    <div class="bg-white py-10 rounded-lg border shadow-sm border-gray-200 dark:border-gray-700 dark:bg-gray-800">
        <div class="mx-auto max-w-7xl">
            <div class="px-6">
                <div class="sm:flex sm:items-start">
                    <div class="flex-auto">
                        <h1 class=" text-base font-semibold leading-6 text-gray-900 dark:text-white">Chart of Accounts
                        </h1>
                        <p class="mt-2 text-sm text-gray-700 dark:text-gray-400">Streamline financial tracking with a
                            comprehensive list of categorized accounts for accurate record-keeping</p>
                    </div>
                    <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <BaseButton name="Add Account"/>
                        <BaseButton name="Import"/>
                    </div>
                </div>

                <div class="mt-4 flow-root">
                    <div class="-my-2 sm:-mx-6 ">
                        <div v-if="accounts.length == 0" id="loader" class="w-full flex justify-center">
                            <div role="status">
                                <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                        <div v-else class="inline-block min-w-full py-2 align-middle sm:px-6">
                            <ul role="list" class="divide-y divide-gray-100 dark:divide-gray-600 h-minus-250px md:h-minus-300px overflow-y-auto md:hidden">
                                <li v-for="(account, index) in accounts.data" class="even:dark:bg-gray-700">
                                    <div class="flex justify-between items-start gap-x-2 py-5 group px-4 transition-all ease-linear">   
                                        <div class="min-w-0 flex-auto">
                                            <div class="flex items-center">
                                                <p class="text-sm font-semibold leading-6 text-gray-700 dark:text-white">
                                                    <span class="mr-2">{{ account.description }}</span>
                                                </p> 
                                                
                                            </div>
                                            <p class="mt-1 text-ellipsis text-xs leading-5 text-gray-500 dark:text-gray-300">{{ account.account_number }} &bullet; {{ account.type }}</p>
                                        </div>
                                        
                                        <!-- <div class="flex items-center text-gray-200 group-hover:text-gray-400 transition-all ease-linear">
                                            <p class="text-sm leading-6 text-gray-900">{{ account.type }}</p>
                                        </div> -->
                                    </div>
                                </li>
                            </ul>

                            <div class="relative overflow-x-auto hidden md:block">
                                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-stripe">
                                    <thead
                                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">Account No#</th>
                                            <th scope="col" class="px-6 py-3">Description</th>
                                            <th scope="col" class="px-6 py-3">Type</th>
                                            <th scope="col" class="px-6 py-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="account in accounts.data"
                                            class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 even:bg-gray-50 even:dark:bg-gray-800">
                                            <td class="px-6 py-4">{{ account.account_number }}</td>
                                            <th scope="row"
                                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {{ account.description }}</th>
                                            <td class="px-6 py-4">{{ account.type }}</td>
                                            <td class="px-6 py-4"><a href="#"
                                                    class="font-medium text-green-600 dark:text-green-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                            <div tabindex="-1" aria-hidden="true" class="fixed flex justify-center items-center left-0 right-0 z-20 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                <div class="relative w-full max-w-2xl max-h-full">
                                    <!-- Modal content -->
                                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        <!-- Modal header -->
                                        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                                Terms of Service
                                            </h3>
                                            <button type="button"
                                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                data-modal-hide="defaultModal">
                                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 14 14">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                </svg>
                                                <span class="sr-only">Close modal</span>
                                            </button>
                                        </div>
                                        <!-- Modal body -->
                                        <div class="p-6 space-y-6">
                                            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                With less than a month to go before the European Union enacts new consumer privacy laws for its
                                                citizens, companies around the world are updating their terms of service agreements to comply.
                                            </p>
                                            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is
                                                meant to ensure a common set of data rights in the European Union. It requires organizations to
                                                notify users as soon as possible of high-risk data breaches that could personally affect them.
                                            </p>
                                        </div>
                                        <!-- Modal footer -->
                                        <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                            <button data-modal-hide="defaultModal" type="button"
                                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I
                                                accept</button>
                                            <button data-modal-hide="defaultModal" type="button"
                                                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            
                        </div>
                    </div>
                </div>

                <div  v-if="accounts.length !== 0" class="mt-4">
                    <div
                        class="flex items-center justify-between mt-auto">
                        <div class="flex flex-1 justify-between md:hidden">
                            <div>
                                <BaseButton name="Export List" />
                            </div>
                            <TailwindPagination :data="accounts" @pagination-change-page="getAccounts" :limit="-1"
                                :item-classes="['flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white']"
                                :active-classes="['']" />
                        </div>
                        <div class="hidden md:flex md:flex-1 md:items-center md:justify-between">
                            <div class="inline-flex items-center gap-x-2">
                                <BaseButton name="Export List" />
                                <div>
                                    <p class="text-sm text-gray-700" v-if="accounts">Showing
                                        <span class="font-medium"> {{ accounts.meta.current_page }} </span> to
                                        <span class="font-medium"> {{ accounts.meta.last_page }} </span> of
                                        <span class="font-medium"> {{ accounts.meta.total }} </span> results
                                    </p>
                                </div>
                            </div>
                            <div>

                                <TailwindPagination :data="accounts" @pagination-change-page="getAccounts"
                                    :limit="2"
                                    :item-classes="['leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white']"
                                    :active-classes="['text-green-600 border border-gray-300 bg-green-50 hover:bg-green-100 hover:text-green-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white']" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import useChartOfAccounts from '../../composables/chartOfAccount';
import { TailwindPagination } from 'laravel-vue-pagination';
import BaseButton from '../../components/system/BaseButton.vue';


const filterParam = ref('')

const { accounts, selectedAccount, fetchAccounts, fetchAccount } = useChartOfAccounts()
const getAccounts = async (page = 1) => {
    filterParam.value = await fetchAccounts(`${filterParam.value ? filterParam.value + '&' : ''}page=${page}`)
}

</script>