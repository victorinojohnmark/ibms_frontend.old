import axios from "axios";
// import { useSystemStore } from "../stores/system";
import router from "../router";
import { useAuthStore } from "../stores/auth";

export default class ApiClient {
    constructor() {
        
    }

    async request(method, path, body = null)
    {
        const authStore = useAuthStore();
        axios.request({
            url: path,
            method: method,
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${authStore.user.token}`
            },
            data: body
        });
    }
    
    async get(path) {
        try {
            const data = await axios.get(path);
            return data;
        } catch (error) {
            if(error.response.status === 401) {
                router.push('/login?auth=false')
            } else {
                return error
            }


        }
    }

    async post(path, body) {
        try {
            const data = await axios.post(path, body);
            return data;
        } catch (error) {
            if(error.response.status === 401) {
                router.push('/login?auth=false')
            } else {
                return error
            }


        }
    }

}