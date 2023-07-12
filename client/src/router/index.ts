import { createRouter, createWebHistory } from 'vue-router';
import {authStore} from "../stores/auth.ts";

const routes = [
    {
        path: "/",
        component: () => import("../layouts/MainLayout.vue"),
        children: [
            {
                name: 'Home',
                path: '/',
                component: () => import('../pages/Home.vue'),
            },
            {
                name: 'Recipe',
                path: '/recettes/:id',
                component: () => import('../pages/Recipe.vue'),
            },
            {
                name: 'Recipes',
                path: '/recettes',
                component: () => import('../pages/Recipes.vue'),
            },
            {
                name: 'NewRecipe',
                path: '/creer-une-recette',
                component: () => import('../pages/NewRecipe.vue'),
            },
            {
                name: 'RandomRecipe',
                path: '/recette-aleatoire',
                component: () => import('../pages/RandomRecipe.vue'),
            },
            {
                name: 'Login',
                path: '/connexion',
                component: () => import('../pages/Login.vue'),
            },
            {
                name: 'Logout',
                path: '/deconnexion',
                component: () => import('../pages/Logout.vue'),
            },
            {
                name: 'Error404',
                path: "/:catchAll(.*)*",
                component: () => import('../pages/Error404.vue'),
            },
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    // Login middleware
    if (to.name === 'Login' && authStore().user !== null) {
        next({ name: 'Home' });
    }

    // User required middleware
    if ((to.name === 'NewRecipe' || to.name === 'RandomRecipe') && authStore().user === null) {
        next({ name: 'Home' });
    }

    next()
})

export default router;
