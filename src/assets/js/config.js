import yaml from "js-yaml";
export const pages = {
    HOME_PAGE: 'HomePage',
    CODE_PAGE: 'CodePage',
    PAINTING_PAGE: 'PaintingPage',
    SEER_PAGE: 'SeerPage',
    CREDITS_PAGE: 'CreditsPage'
}
export const codes = {
    PAINTING_1: '1912',
    PAINTING_2: '1013',
    PAINTING_3: '0109'
}
export const cards = [
    {
        id: 'card-rose',
        src: '/images/cards/card-rose.webp',
        alt: "Carte de tarot avec le signe d'une rose"
    },
    {
        id: 'card-chalice',
        src: '/images/cards/card-chalice.webp',
        alt: "Carte de tarot avec le signe d'un calice"
    },
    {
        id: 'card-sword',
        src: '/images/cards/card-sword.webp',
        alt: "Carte de tarot avec le signe d'une épée"
    }
]
export async function fetchData() {
    const response = await fetch('/src/assets/data.yaml');
    const yamlContent = await response.text();
    return yaml.load(yamlContent);
}