import { createRouter, createWebHistory } from 'vue-router';
import Recipes from '../pages/Recipes.vue';

const routes = [
    {
        path: '/',
        name: 'Recipes',
        component: Recipes,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
