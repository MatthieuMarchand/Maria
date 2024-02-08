import { pages } from './config.js'
import { defineStore } from 'pinia'
import yaml from 'js-yaml'

export const useStore = defineStore('app', {
    state: () => ({
        page: pages.HOME_PAGE,
        dataOfScreen: null,
        data: null,
    }),
    actions: {
        updateCurrentPage(newPage) {
            this.page = newPage
        },
        updatePage(newPage, screenId) {
            this.page = newPage;
            this.dataOfScreen = this.data.find(screen => screen.id === screenId)
        },
        nextPage() {
            this.dataOfScreen = this.data.find(screen => screen.id === this.dataOfScreen.nextScreen)
            this.page = this.dataOfScreen.type;
        },
        async fetchData() {
            try {
<<<<<<< HEAD
                const response = await fetch('/data.yaml');
                const yamlContent = await response.text();
                this.data = yaml.load(yamlContent).screens;
                this.dataOfScreen = yaml.load(yamlContent).screens[0];
                console.log("--------------------------------")
                console.log(yaml.load(yamlContent).screens)
                console.log("--------------------------------")
=======
                const response = await fetch('/data.yaml')
                const yamlContent = await response.text()
                this.data = yaml.load(yamlContent)
>>>>>>> cb59c49 (fix: corrige le responsive et ajuste l'intégration de la page painting)
            } catch (error) {
                console.error('Erreur lors de la lecture du fichier YAML :', error)
            }
<<<<<<< HEAD
        },
        getScreenById(targetId) {
            const targetScreen = this.data.find(screen => screen.id === targetId);
            return targetScreen || null;
        }
    },
});
=======
        }
    }
})
>>>>>>> cb59c49 (fix: corrige le responsive et ajuste l'intégration de la page painting)
