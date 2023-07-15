import axios from "axios";
// import { useSystemStore } from "../stores/system";
import router from "../router";
import { useAuthStore } from "../stores/auth";
import { useToast } from 'vue-toastification';
import { useSystemStore } from "../stores/system";

const authStore = useAuthStore();
const toast = useToast();
const systemStore = useSystemStore()

export default class ApiClient {
    
    constructor() {
        systemStore.reset()
    }

    async get(path) {
        try {
            const response = await axios.get(path, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${authStore.user.authorization.token}`
                },
            });
            systemStore.reset()
            return response.data;
            
        } catch (error) {
            this.handleError(error)
        }
    }

    async post(path, body) {
        // console.log('API Class post: ', body);
        try {
            const data = await axios.post(path, body, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${authStore.user.authorization.token}`
                },
            });
            systemStore.reset()
            return data;
            
        } catch (error) {
           this.handleError(error)
        }
    }

    async patch(path, body) {
        
        try {
            const data = await axios.patch(path, body, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${authStore.user.authorization.token}`
                },
            });
            systemStore.reset()
            return data;
        } catch (error) {
            this.handleError(error)
        }
    }

    handleError(error) {
        if(error.response.status === 500) {
            toast.error('Oops, Something went wrong with the backend server. Please contact the administrator.', { position: 'bottom-right' })
        }

        if(error.response.status === 401) {
            authStore.handleLogout()
        }

        systemStore.systemError = error.response.data.errors
        console.error(error)
        // return error
    }

}