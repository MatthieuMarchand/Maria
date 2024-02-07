import { defineStore } from 'pinia';
import { pages } from './Enums.js';

export const useStore = defineStore('app', {
    state: () => ({
        page: pages.HOME_PAGE,
    }),
    actions: {
        updateCurrentPage(newPage) {
            this.page = newPage;
        },
    },
});