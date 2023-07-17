import { ref, computed } from "vue"
import ApiClient from "../helper/api"

export default function usePayees() {
    const payees = ref([])
    const selectedPayee = ref(null)
    const payeeCount = computed(() => payees.length)

    const fetchPayee = async (urlParam = null, page = 1) => {
        try {
            
        } catch (error) {
            console.error('Failted to fetch payees: ', error)
        }
    }
}
