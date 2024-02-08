import { pages } from './config.js'
import { defineStore } from 'pinia'
import yaml from 'js-yaml';

export const useStore = defineStore('app', {
    state: () => ({
        page: pages.HOME_PAGE,
        data: null,
    }),
    actions: {
        updateCurrentPage(newPage) {
            this.page = newPage;
        },
        async fetchData() {
            try {
                const response = await fetch('/src/assets/data.yaml');
                const yamlContent = await response.text();
                this.data = yaml.load(yamlContent);
            } catch (error) {
                console.error('Erreur lors de la lecture du fichier YAML :', error);
            }
        },
    },
});
