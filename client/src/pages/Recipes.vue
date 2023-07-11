<template>
  <div class="container mx-auto">
    <h2 class="text-3xl text-gray-800 font-bold mb-6">Découvrez nos recettes</h2>

    <div class="mb-4">
      <input type="text" placeholder="Rechercher une recette" class="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Recette 1 -->
      <div class="bg-white rounded-lg shadow-md">
        <img src="image-recette1.jpg" alt="Recette 1" class="h-40 w-full object-cover rounded-t-lg">
        <div class="p-4">
          <h3 class="text-xl text-gray-800 font-semibold mb-2">Nom de la recette 1</h3>
          <p class="text-gray-600 mb-4">Description de la recette 1</p>
          <div class="flex justify-between items-center">
            <a href="#" class="bg-blue-500 text-white hover:bg-blue-600 text-sm font-bold py-2 px-4 rounded-full">Voir la recette</a>
            <span class="text-gray-500">Calories : 500</span>
          </div>
        </div>
      </div>

      <!-- Recette 2 -->
      <div class="bg-white rounded-lg shadow-md">
        <img src="image-recette2.jpg" alt="Recette 2" class="h-40 w-full object-cover rounded-t-lg">
        <div class="p-4">
          <h3 class="text-xl text-gray-800 font-semibold mb-2">Nom de la recette 2</h3>
          <p class="text-gray-600 mb-4">Description de la recette 2</p>
          <div class="flex justify-between items-center">
            <a href="#" class="bg-blue-500 text-white hover:bg-blue-600 text-sm font-bold py-2 px-4 rounded-full">Voir la recette</a>
            <span class="text-gray-500">Calories : 600</span>
          </div>
        </div>
      </div>

      <!-- Recette 3 -->
      <div class="bg-white rounded-lg shadow-md">
        <img src="image-recette3.jpg" alt="Recette 3" class="h-40 w-full object-cover rounded-t-lg">
        <div class="p-4">
          <h3 class="text-xl text-gray-800 font-semibold mb-2">Nom de la recette 3</h3>
          <p class="text-gray-600 mb-4">Description de la recette 3</p>
          <div class="flex justify-between items-center">
            <a href="#" class="bg-blue-500 text-white hover:bg-blue-600 text-sm font-bold py-2 px-4 rounded-full">Voir la recette</a>
            <span class="text-gray-500">Calories : 450</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import {recipesStore} from "../stores/recipes.ts";

export default defineComponent({
  name: 'Recipes',
  setup() {
    const store = recipesStore();

    return {
      store,
    };
  },
});
</script>
