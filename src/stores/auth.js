import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
import { useToast } from 'vue-toastification';

const toast = useToast();

export const useAuthStore = defineStore('auth', {
    persist: true,
    state: () => ({
        authUser: null,
        authErrors: [],
        authStatus: null
    }),
    getters: {
        user: (state) => state.authUser,
        errors: (state) => state.authErrors,
        status: (state) => state.authStatus
    },
    actions: {
        async initialize() {
            this.resetErrorAndStatus()
            await axios.get('/sanctum/csrf-cookie')

            if(this.user && this.user.authorization.token) {
                try {
                    const data = await axios.get('/api/auth/user', {
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${this.user.token}`
                        }
                    })
                } catch (error) {
                    if(error.response.status == 401) {
                        this.authUser = null;
                        this.resetErrorAndStatus();
                        router.push('/login?auth=false');
                    }
                    console.error(error)
                    
                }
            } else {
                router.push('/login?auth=false');
            }
        },
        async handleLogin(loginData) {
            this.resetErrorAndStatus();
            try {
                const data = await axios.post('/api/auth/login', loginData);

                toast.success('Verification done! You are being redirected...', { timeout: 2000 })
                setTimeout(() => {
                    this.authUser = data.data;
                    router.push('/');
                }, 2200)
                
            } catch (error) {
                if(error.response.data.errors && error.response.data.errors !== null) {
                    this.authErrors = error.response.data.errors
                } else {
                    this.authStatus = error.response.data.message
                    // toast.error(error.response.data.message)
                }
            }
        },
        async handleLogout() {
            this.resetErrorAndStatus();
            console.log('hello')
            try {
                const data = await axios.post('/api/auth/logout', {}, {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${this.user.data.token}`
                    }
                });
                this.authStatus = data.data;
                this.authErrors = []
                this.authUser = null
                router.push('/login?auth=false')
            } catch (error) {
                if(error.response.status === 422) {
                    this.authErrors = error.response.data.errors
                } else {
                    console.error(error.response.data.message)
                }

                this.authStatus = null;
                this.authErrors = null
                this.authUser = null
                router.push('/login?auth=false')

            }
        },
        resetErrorAndStatus() {
            this.authErrors = [];
            this.authStatus = null;
        }


    }
})