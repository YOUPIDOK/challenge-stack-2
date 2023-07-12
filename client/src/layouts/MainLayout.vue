<template>
  <Disclosure as="header" class="bg-white shadow" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
      <div class="relative flex justify-between">
        <div class="relative z-10 flex items-center lg:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
      <div class="flex justify-between">
        <nav class="hidden lg:flex lg:space-x-8 lg:py-2" aria-label="Global">
          <router-link v-for="item in navigation" :key="item.name" :to="{ name: item.page }"  :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900', 'inline-flex items-center rounded-md py-2 px-3 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
        </nav>
        <div class="flex items-center">
          <router-link :to="{ name: 'Login' }" v-if="store.user === null" class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 inline-flex items-center rounded-md py-2 px-3 text-sm font-medium">Connexion</router-link>
          <router-link :to="{ name: 'Logout' }" v-else class="cursor-pointer	text-gray-900 hover:bg-gray-50 hover:text-gray-900 inline-flex items-center rounded-md py-2 px-3 text-sm font-medium">Déconnexion</router-link >
        </div>
      </div>
    </div>

    <DisclosurePanel as="nav" class="lg:hidden" aria-label="Global">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <router-link v-for="item in navigation" :key="item.name" as="a" :to="{ name: item.page }" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900', 'block rounded-md py-2 px-3 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
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
  components: {Disclosure, RouterLink},
  setup() {
    const store = authStore();

    const navigation = [
      { name: 'Accueil', page: 'Home' },
      { name: 'Les recettes', page: 'Recipes' },
      { name: 'Créer ma recette', page: 'NewRecipe' },
    ]

    return {
      navigation,
      store,
    }
  }
}
</script>




