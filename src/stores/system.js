import { defineStore } from "pinia"

export const useSystemStore = defineStore('system', {
    persist: true,
    state: () => ({
        systemStatus: null,
        systemError: [],
        darkMode: false
    }),
    getters: {
        errors: (state) => state.systemError,
        status: (state) => state.systemStatus
    },
    actions: {
        reset() {
            this.systemError = null
            this.systemStatus = []
        },
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            document.documentElement.classList.toggle('dark', this.darkMode);
        },
    }
})