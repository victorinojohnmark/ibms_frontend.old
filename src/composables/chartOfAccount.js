import { ref, reactive, computed } from 'vue';
import ApiClient from '../helper/api.js';
import { useToast } from 'vue-toastification';
import * as XSLX from 'xlsx';
import { useSystemStore } from '../stores/system.js';

const toast = useToast()
const api = new ApiClient();
const systemStore = useSystemStore()

export default function useChartOfAccounts() {
  const accounts = ref([]);
  const selectedAccount = ref(null)
  const accountCount = computed(() => accounts.length);
  const accountErrors = ref([]);

  const fetchAccounts = async (urlParam = null, page = 1) => {
    try {
      const response = await api.get(`/api/chart-of-accounts${ !urlParam ? '' : '?' + urlParam }` + (!urlParam ? `?page=${page}` :  `&page=${page}`) );
      accounts.value = response
      return urlParam
    } catch (error) {
      console.error('Failed to fetch accounts:', error);
    }
  };

  const fetchAccount = async (id) => {
    try {
      const response = await api.get(`/api/chart-of-accounts/${id}`);
      selectedAccount.value = response.data;
    } catch (error) {
      console.error('Failed to fetch accounts:', error);
    }
  }

  const addAccount = async (data) => {
    try {
      // console.log('Add Account data: ',data)
      const response = await api.post('/api/chart-of-accounts', data)
      
      if(response) {
        toast.success('Account added successfully!')
        return response.data
      }
      
    } catch (error) {
      console.error('Failed to add account:', error);
    }
  };

  const updateAccount = async (data) => {
    try {
      const response = await api.patch(`/api/chart-of-accounts/${data.id}`, data)
      if(response.data) {
        toast.success('Account updated successfully')
        diselectAccount()
        return response.data
      }
      
    } catch (error) {
      console.error('Failed to add account:', error);
    }
  };

  const diselectAccount = async () => {
    selectedAccount.value = null
  }

  const downloadAccountList = async (urlParam = null) => {

    try {
      const response = await api.get(`/api/chart-of-accounts${ !urlParam ? '' : '?' + urlParam }`);
      const jsonData = await response.data;

      //remove id object
      Array.from(jsonData).forEach(obj => {
        delete obj.id
      });

      const ws = XSLX.utils.json_to_sheet(jsonData)
      const wb = XSLX.utils.book_new()
      // ws['!cols'][1] = { hidden: true }
      XSLX.utils.book_append_sheet(wb, ws, "Sheet 1")
      const filename = "Account List.xlsx"
      XSLX.writeFile(wb, filename)
    } catch (error) {
      console.error(error)
    }
  }

  // Fetch accounts when the composable is first used
  fetchAccounts();

  return {
    accounts,
    selectedAccount,
    updateAccount,
    addAccount,
    // deleteAccount,
    accountCount,
    fetchAccount,
    fetchAccounts,
    diselectAccount,
    downloadAccountList
  };
}