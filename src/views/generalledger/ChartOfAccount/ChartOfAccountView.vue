<template>
    <div class="bg-white py-5 rounded-lg border shadow-sm border-gray-200 dark:border-gray-700 dark:bg-gray-800">
        <div class="mx-auto max-w-7xl">
            <div class="px-6 md:py-3">
                <div class="sm:flex sm:items-start">
                    <div class="flex-auto">
                        <h1 class=" text-base font-semibold leading-6 text-gray-900 dark:text-white">Chart of Accounts
                        </h1>
                        <p class="hidden md:block mt-2 text-sm text-gray-700 dark:text-gray-400">Streamline financial
                            tracking with a comprehensive list of categorized accounts for accurate record-keeping.</p>
                    </div>
                    <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <BaseButton name="Add Account" @click="toggleCreateModal()" />
                        <BaseModal title="Add Account" v-if="showCreateModal" @close-modal="toggleCreateModal()">
                            <ChartOfAccountForm :account="account" @save="handleAddAccountModal" />
                        </BaseModal>

                        <!-- <BaseButton name="Import" /> -->
                    </div>
                </div>

                <div class="mt-4 flow-root">
                    <div class="-my-2 sm:-mx-6 ">
                        <BaseLoading v-if="accounts.length == 0" />

                        <div v-else class="inline-block min-w-full py-2 align-middle sm:px-6">
                            <ul role="list"
                                class="divide-y divide-gray-100 dark:divide-gray-600 h-minus-18.7 overflow-y-auto no-scrollbar md:hidden">
                                <li v-for="(account, index) in accounts.data"
                                    @click="handleShowAccountModal(account.id)"
                                    class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 even:bg-gray-50 even:dark:bg-gray-800 cursor-pointer">
                                    <div
                                        class="flex justify-between items-start gap-x-2 py-5 group px-4 transition-all ease-linear">
                                        <div class="min-w-0 flex-auto">
                                            <div class="flex items-center">
                                                <p
                                                    class="text-sm font-semibold leading-6 text-gray-700 dark:text-white">
                                                    <span class="mr-2">{{ account.description }}</span>
                                                </p>

                                            </div>
                                            <p class="mt-1 text-ellipsis text-xs leading-5 text-gray-500 dark:text-gray-300">
                                                {{ account.account_number }} &bullet; {{ account.type }}</p>
                                        </div>
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
                                                    @click="handleShowAccountModal(account.id)"
                                                    class="font-medium text-green-600 dark:text-green-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                            <BaseModal title="Update Account" v-if="showModal" @close-modal="toggleModal()">
                                <div class="h-8" v-if="selectedAccount == null"></div> <!-- Filler for loding icon -->
                                <ChartOfAccountForm v-else :account="selectedAccount" @save="handleUpdateAccount" />
                            </BaseModal>
                        </div>
                    </div>
                </div>



                <div v-if="accounts.length !== 0" class="mt-4">
                    <div class="flex items-center justify-between mt-auto">
                        <div class="flex flex-1 justify-between md:hidden">
                            <div>
                                <BaseButton name="Download List" @click="downloadAccountList(filterParam)" />
                            </div>
                            <TailwindPagination :data="accounts" @pagination-change-page="getAccounts"
                                class="shadow-none" :limit="-1"
                                :item-classes="['flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white']"
                                :active-classes="['']" />
                        </div>
                        <div class="hidden md:flex md:flex-1 md:items-center md:justify-between">
                            <div class="inline-flex items-center gap-x-2">
                                <BaseButton name="Download List" @click="downloadAccountList(filterParam)" />
                                <div>
                                    <p class="text-sm text-gray-700 dark:text-white" v-if="accounts">Showing
                                        <span class="font-medium"> {{ accounts.meta.current_page }} </span> to
                                        <span class="font-medium"> {{ accounts.meta.last_page }} </span> of
                                        <span class="font-medium"> {{ accounts.meta.total }} </span> results
                                    </p>
                                </div>
                            </div>
                            <div>

                                <TailwindPagination :data="accounts" @pagination-change-page="getAccounts" :limit="2"
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
import useChartOfAccounts from '../../../composables/chartOfAccount';
import { TailwindPagination } from 'laravel-vue-pagination';
import BaseButton from '../../../components/system/BaseButton.vue';
import BaseModal from '../../../components/system/BaseModal.vue';
import BaseLoading from '../../../components/system/BaseLoading.vue';
import ChartOfAccountForm from './component/ChartOfAccountForm.vue';
import { useSystemStore } from '../../../stores/system';

const systemStore = useSystemStore()
const filterParam = ref('')
const currentPage = ref(1)

const {
    accounts,
    selectedAccount,
    fetchAccounts,
    fetchAccount,
    downloadAccountList
} = useChartOfAccounts()

const getAccounts = async (page = 1) => {
    currentPage.value = page;
    filterParam.value = await fetchAccounts(`${filterParam.value ? filterParam.value : ''}`, currentPage.value)
}

const account = ref({
    account_number: '',
    description: '',
    type: ''
})

const showModal = ref(false);
const showCreateModal = ref(false);

const toggleModal = () => {
    showModal.value = !showModal.value
    if (!showModal.value) {
        systemStore.reset()
    }
}

const toggleCreateModal = () => {
    showCreateModal.value = !showCreateModal.value

    if (!showCreateModal.value) {
        systemStore.reset()
    }
}

const handleAddAccountModal = async () => {
    filterParam.value = ''
    getAccounts()
    account.value.account_number = ''
    account.value.description = ''
    account.value.type = ''
    toggleCreateModal()
}

const handleShowAccountModal = (id) => {
    filterParam.value = ''
    fetchAccount(id)
    toggleModal()
}

const handleUpdateAccount = async (newAccount) => {
        const index = await accounts.value.data.findIndex(obj => obj.id === newAccount.id);
        if (index !== -1) {
            accounts.value.data[index] = newAccount
            toggleModal()
        } else {
            getAccounts
        }
    } 
</script>