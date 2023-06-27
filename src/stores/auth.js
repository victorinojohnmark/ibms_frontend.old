import { defineStore } from "pinia";
// import axios from "axios";
import router from "../router";
import ApiClient  from "../helper/api";

const api = new ApiClient()

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
        async initialize(){
            await this.getToken()
            console.log('User: ', this.user)
            // if(!this.user) {
            //     router.push("/login?auth=false")
            // }

            try {
                const data = await api.get('/api/user')
                this.authUser = data.data
            } catch (error) {
                if(error.response && error.response.status === 401) {
                    // this.authStatus = error.response.data.message
                    this.authUser = null;
                    router.push('/login?auth=false');
                }
            }
        },
        async getToken() {
            await api.get('/sanctum/csrf-cookie')
        },
        async getUser() {
            await this.getToken()
            const data = await api.get('/api/user')
            this.authUser = data.data
        },
        async handleLogin(data) {
            this.authErrors = [];
            await this.getToken()

            try {
                await api.post('/login', {
                    email: data.email,
                    password: data.password
                })
                const user = await api.get('/api/user')
                this.authUser = user.data
                router.push("/")
            } catch (error) {
                if(error.response.status === 422) {
                    this.authErrors = error.response.data.errors
                }
                // console.log(error)
            }
        },
        async handleRegister(data) {
            this.authErrors = [];
            await this.getToken()
            try {
                await api.post('/register', {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirmation
                })
                
                router.push("/")
            } catch (error) {
                if(error.response.status === 422) {
                    this.authErrors = error.response.data.errors
                }
            }
        },
        async handleLogout(){
            await api.post('/logout')
            this.authUser = null;
            this.authErrors = null;
            this.authStatus = null;
            // const user = await api.get('/api/user')
            router.push("/login?auth=false")
        },
        async handleForgotPassword(email) {
            this.authErrors = [];
            this.getToken();
            try {
                const response = await api.post('/forgot-password', {
                    email: email
                })

                this.authStatus = response.data.status
            } catch (error) {
                if(error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
            
        },
        async handleResetPassword(resetData) {
            this.authErrors = [];

            try {
                const response = await api.post('/reset-password', resetData);
                // router.push("/");

                this.authStatus = response.data.status
            } catch (error) {
                if(error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
        resetErrorAndStatus() {
            this.authErrors = null;
            this.authStatus = null;
        }


    }
})