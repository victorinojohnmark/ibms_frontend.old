import { ref, reactive, computed } from 'vue';
import ApiClient from '../helper/api.js';
import { useToast } from 'vue-toastification';
import * as XSLX from 'xlsx';

const toast = useToast()
const api = new ApiClient();

export default function useChartOfAccounts() {
  const accounts = ref([]);
  const selectedAccount = ref(null)
  const accountCount = computed(() => accounts.length);

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
    console.log(data)
    try {
      const response = await api.post('/api/chart-of-accounts', data)
      if(response.data) {
        fetchAccounts()
        toast.success('Account added successfully')
      }
      
    } catch (error) {
      console.error('Failed to add account:', error);
    }
  };

  const deleteAccount = async (accountId) => {
    try {
      await axios.delete(`/api/chart-of-accounts/${accountId}`);
      const index = accounts.findIndex((account) => account.id === accountId);
      if (index !== -1) {
        accounts.splice(index, 1);
      }
    } catch (error) {
      console.error('Failed to delete account:', error);
    }
  };

  const diselectAccount = async () => {
    selectedAccount.value = null
  }

  const downloadAccountList = async (urlParam = null) => {
    // try {
    //   const response = await api.get(`/api/chart-of-accounts${ !urlParam ? '' : '?' + urlParam }`);
    //   const jsonData = await response.data;

    //   const parser = new Parser({})
    //   const csv = parser.parse(jsonData)

    //   const blob = new Blob([csv], { type: 'text/csv' })

    //   const link = document.createElement('a');
    //   link.href = URL.createObjectURL(blob);
    //   link.download = 'data.csv';

    //   link.click();
    // } catch (error) {
    //   console.error(error)
    // }

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
    addAccount,
    deleteAccount,
    accountCount,
    fetchAccount,
    fetchAccounts,
    diselectAccount,
    downloadAccountList
  };
}