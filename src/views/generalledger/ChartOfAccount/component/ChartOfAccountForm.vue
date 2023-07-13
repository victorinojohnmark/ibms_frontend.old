<template>
    <BaseLoading v-if="accountTypes.length == 0" />
    <form v-else @submit.prevent action="#">
        <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <BaseInput v-model="account.account_number" type="number" label="Account No#"/>
            <BaseInput v-model="account.description" label="Decription"/>
            <BaseSelectInput v-model="account.type" :options="accountTypes" label="Account Type"/>
            
        </div>
        <div class="flex items-center space-x-4">
            <BaseButton type="submit" name="Save Account" @click="handleSaveAccount"/>
        </div>
    </form>
</template>

<script setup>
import { onBeforeMount, onMounted, ref, watch } from 'vue';
import BaseInput from '../../../../components/system/BaseInput.vue'
import BaseSelectInput from '../../../../components/system/BaseSelectInput.vue'
import BaseButton from '../../../../components/system/BaseButton.vue'
import BaseLoading from '../../../../components/system/BaseLoading.vue';
import ApiClient from '../../../../helper/api'
import useChartOfAccounts from '../../../../composables/chartOfAccount';

const { addAccount } = useChartOfAccounts()

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
    if(props.account.id) {
        
        emit('save')
    } else {
        await addAccount(props.account)
        emit('save')
    }
    
}


// watch(selectedAccount, (newValue) => {
//     account.value = selectedAccount
// })
</script>