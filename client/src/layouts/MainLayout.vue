<template>
  <Disclosure as="header" class="bg-white shadow" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
      <div class="relative flex justify-between">
        <div class="relative z-10 flex items-center lg:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <div v-if="!open" class="block h-6 w-6" aria-hidden="true">🍔</div>
            <div v-else class="block h-6 w-6" aria-hidden="true">🍔</div>
          </DisclosureButton>
        </div>
      </div>
      <div class="flex justify-between">
        <nav class="hidden lg:flex lg:space-x-8 lg:py-2" aria-label="Global">
            <router-link :to="{ name: 'Home' }"  class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 inline-flex items-center rounded-md py-2 px-3 text-sm font-medium" >Accueil</router-link>
            <router-link :to="{ name: 'Recipes' }"  class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 inline-flex items-center rounded-md py-2 px-3 text-sm font-medium" >Les recettes</router-link>
            <router-link :to="{ name: 'NewRecipe' }" v-if="store.user !== null " class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 inline-flex items-center rounded-md py-2 px-3 text-sm font-medium" >Créer ma recette</router-link>
        </nav>
        <div class="flex items-center">
          <router-link :to="{ name: 'Login' }" v-if="store.user === null" class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 inline-flex items-center rounded-md py-2 px-3 text-sm font-medium">Connexion</router-link>
          <router-link :to="{ name: 'Logout' }" v-else class="cursor-pointer	text-gray-900 hover:bg-gray-50 hover:text-gray-900 inline-flex items-center rounded-md py-2 px-3 text-sm font-medium">Déconnexion</router-link >
        </div>
      </div>
    </div>

    <DisclosurePanel as="nav" class="lg:hidden" aria-label="Global">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <router-link :to="{ name: 'Home' }"  class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium" >Accueil</router-link>
        <router-link :to="{ name: 'Recipes' }"  class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium" >Les recettes</router-link>
        <router-link :to="{ name: 'NewRecipe' }" v-if="store.user !== null " class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium" >Créer ma recette</router-link>
      </div>
    </DisclosurePanel>
  </Disclosure>
  <RouterView />
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import {authStore} from '../stores/auth'
import { RouterLink } from 'vue-router'
export default {
  name: 'MainLayout',
  components: {DisclosureButton, DisclosurePanel, Disclosure, RouterLink},
  setup() {
    const store = authStore();

    return {
      store,
    }
  }
}
</script>




