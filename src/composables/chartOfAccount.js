import { ref, reactive, computed } from 'vue';
import ApiClient from '../helper/api.js';

const api = new ApiClient();

export default function useChartOfAccounts() {
  const accounts = ref([]);
  const accountCount = computed(() => accounts.length);

  const fetchAccounts = async (urlParam = null) => {
    try {
      const response = await api.get(`/api/chartofaccounts${ !urlParam ? '' : '?' + urlParam }`);
      accounts.value = response
    //   accounts.push(...response.data); // Add fetched accounts
    } catch (error) {
      console.error('Failed to fetch accounts:', error);
    }
  };

  const addAccount = async (name) => {
    try {
      const response = await axios.post('/api/chartofaccounts', { name });
      const newAccount = response.data;
      accounts.push(newAccount);
    } catch (error) {
      console.error('Failed to add account:', error);
    }
  };

  const deleteAccount = async (accountId) => {
    try {
      await axios.delete(`/api/chartofaccounts/${accountId}`);
      const index = accounts.findIndex((account) => account.id === accountId);
      if (index !== -1) {
        accounts.splice(index, 1);
      }
    } catch (error) {
      console.error('Failed to delete account:', error);
    }
  };

  // Fetch accounts when the composable is first used
  fetchAccounts();

  return {
    accounts,
    addAccount,
    deleteAccount,
    accountCount,
    fetchAccounts,
  };
}