import { pages } from './config.js'
import { defineStore } from 'pinia'
import yaml from 'js-yaml'

export const useStore = defineStore('app', {
    state: () => ({
        page: pages.HOME_PAGE,
        dataOfScreen: null,
        data: null
    }),
    actions: {
        nextPage(newPage = null, screenId = null) {
            this.dataOfScreen = screenId ? this.data.find(screen => screen.id === screenId) : this.data.find(screen => screen.id === this.dataOfScreen.nextScreen)
            this.page = newPage ? newPage : this.dataOfScreen.type
        },
        async initialize() {
            try {
                const response = await fetch('/data.yaml')
                const yamlContent = await response.text()
                this.data = yaml.load(yamlContent).screens
                this.dataOfScreen = this.getScreenById("introduction")
                console.log('--------------------------------')
                console.log(yaml.load(yamlContent).screens)
                console.log('--------------------------------')
            } catch (error) {
                console.error('Erreur lors de la lecture du fichier YAML :', error)
            }
        },
        getScreenById(targetId) {
            const targetScreen = this.data.find(screen => screen.id === targetId)
            return targetScreen || null
        }
    }
})
