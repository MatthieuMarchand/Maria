import { defineStore } from 'pinia'
import { pages } from './config.js'

export const useStore = defineStore('app', {
    state: () => ({
        page: pages.CODE_PAGE,
        data: null
    }),
    actions: {
        updateCurrentPage(newPage) {
            this.page = newPage
        }
    }
})
