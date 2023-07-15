<template>
    <BaseLoading v-if="accountTypes.length == 0" />
    <form v-else @submit.prevent action="#">
        <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <BaseInput v-model="account.account_number" type="number" class="no-arrow" label="Account No#"
            :error="systemStore.errors && systemStore.errors.account_number ? systemStore.errors.account_number[0] : null" />
            <BaseInput v-model="account.description" label="Decription" 
            :error="systemStore.errors && systemStore.errors.description ? systemStore.errors.description[0] : null" />
            <BaseSelectInput v-model="account.type" :options="accountTypes" label="Account Type" 
            :error="systemStore.errors && systemStore.errors.type ? systemStore.errors.type[0] : null" />
            
        </div>
        <div class="flex items-center space-x-4">
            <BaseButton type="submit" name="Save Account" @click="handleSaveAccount"/>
        </div>
    </form>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import BaseInput from '../../../../components/system/BaseInput.vue'
import BaseSelectInput from '../../../../components/system/BaseSelectInput.vue'
import BaseButton from '../../../../components/system/BaseButton.vue'
import BaseLoading from '../../../../components/system/BaseLoading.vue';
import ApiClient from '../../../../helper/api'
import useChartOfAccounts from '../../../../composables/chartOfAccount';
import { useSystemStore } from '../../../../stores/system';

const systemStore = useSystemStore()

const { addAccount, updateAccount } = useChartOfAccounts()

const emit = defineEmits(['save','cancel'])

const api = new ApiClient()

const props = defineProps({
    account: {
        type: Object,
        required: true
    }
})

const accountTypes = ref([])

const fetchAccountTypes = async () => {
    const data = await api.get('/api/reference/account-type')
    accountTypes.value = data
}

onBeforeMount(async () => {
    await fetchAccountTypes()
})

const handleSaveAccount = async () => {
    try {
        if(props.account.id) {
            const updatedAccount = await updateAccount(props.account)
            if(updatedAccount) {
                emit('save', updatedAccount.data)
            }
        } else {
            const newAccount = await addAccount(props.account)
            if(newAccount) {
                emit('save')
            }
        }
    } catch (error) {
        console.error(error)
    }
    
}

</script>