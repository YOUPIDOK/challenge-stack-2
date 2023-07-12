import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import "./style.css";
import {authStore} from "./stores/auth.ts";

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')

// Load authStore from localStorage
pinia.use((pinia) => {
    const authStoredState = localStorage.getItem('authStore');
    if (authStoredState) {
        Object.assign(authStore(), JSON.parse(authStoredState));
    }
});

// Save authStore to localStorage
authStore().$subscribe((mutation) => {
    localStorage.setItem('authStore', JSON.stringify(authStore()));
});
