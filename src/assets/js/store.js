import { defineStore } from 'pinia'
import { pages } from './config.js'

export const useStore = defineStore('app', {
    state: () => ({
        page: pages.CREDITS_PAGE,
        data: null
    }),
    actions: {
        updateCurrentPage(newPage) {
            this.page = newPage
        }
    }
})
