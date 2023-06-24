import { defineStore } from "pinia";

const AUTH_STORAGE_KEY = 'auth'

export const useAppStore = defineStore({
    id: 'auth',
    persist: true,
    state: () => ({
        mobileMenuVisible: false
    }),
    getters: {

    },
    actions: {
        hideMobileMenu() {

        },
        showMobileMenu() {
            
        }
    }
});