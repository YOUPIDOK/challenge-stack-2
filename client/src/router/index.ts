import { createRouter, createWebHistory } from 'vue-router';

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
                path: '/creer-ma-recette',
                component: () => import('../pages/NewRecipe.vue'),
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

export default router;
