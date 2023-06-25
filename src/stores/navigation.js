import { defineStore } from "pinia";

export const useNavigationStore = defineStore('navigation', {
    state: () => ({
        sideBarMenu: false,

    }),
    getters: {
        sideBarMenuVisibility: (state) => state.sideBarMenu
    },
    actions: {
        toggleSideBarMenu() {
            this.sideBarMenu = !this.sideBarMenu;
        },
        hideSideBarMenu() {
            this.sideBarMenu = false;
        }
    }
});