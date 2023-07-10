import axios from "axios";
// import { useSystemStore } from "../stores/system";
import router from "../router";
import { useAuthStore } from "../stores/auth";
import { useToast } from 'vue-toastification';

const authStore = useAuthStore();
const toast = useToast();

export default class ApiClient {
    
    async get(path) {
        try {
            const response = await axios.get(path, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${authStore.user.authorization.token}`
                },
            });
            console.log(response.headers);
            console.log('Token: ', authStore.user.authorization.token)
            console.log('Response: ', response.data);
            return response.data;
            
        } catch (error) {
            if(error.response.status === 500) {
                toast.error('Oops, Something went wrong to the backend server', { position: 'bottom-right' })
            }

            if(error.response.status === 401) {
                authStore.handleLogout()
                // router.push('/login?auth=false')
            }

            console.error(error)
        }
    }

    async post(path, body) {
        try {
            const data = await axios.post(path, body, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${authStore.user.authorization.token}`
                },
            });
            return data;
        } catch (error) {
            if(error.response.status === 500) {
                toast.error('Oops, Something went wrong to the backend server', { position: 'bottom-right' })
            }

            if(error.response.status === 401) {
                authStore.handleLogout()
            }

            console.error(error)


        }
    }

}