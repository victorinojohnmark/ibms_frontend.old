import axios from "axios";
// import { useSystemStore } from "../stores/system";
import router from "../router";

export default class ApiClient {
    constructor() {

    }
    
    async get(path) {
        try {
            const data = await axios.get(path)
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
            const data = await axios.post(path, body)
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