import { defineStore } from "pinia"

export const useSystemStore = defineStore('system', {
    persist: true,
    state: () => ({
        systemStatus: null,
        systemError: []
    }),
    getters: {
        errors: (state) => state.systemError,
        status: (state) => state.systemStatus
    },
    actions: {
        reset() {
            this.systemError = null
            this.systemStatus = []
        }
    }
})