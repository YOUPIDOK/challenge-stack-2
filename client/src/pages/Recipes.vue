<template>
  <div class="container mx-auto">
    <h2 class="text-3xl text-gray-800 font-bold mb-6">
      Découvrez nos recettes
    </h2>

    <div class="mb-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Rechercher une recette"
        class="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div
      v-for="recipe in recipes"
      :key="recipe.id"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <div class="bg-white rounded-lg shadow-md">
        <img
          src="image-recette1.jpg"
          alt="Recette 1"
          class="h-40 w-full object-cover rounded-t-lg"
        />
        <div class="p-4">
          <h3 class="text-xl text-gray-800 font-semibold mb-2">
            {{ recipe.title }}
          </h3>
          <p class="text-gray-600 mb-4">{{ recipe.description }}</p>
          <div class="flex justify-between items-center">
            <a
              href="#"
              class="bg-blue-500 text-white hover:bg-blue-600 text-sm font-bold py-2 px-4 rounded-full"
              >Voir la recette</a
            >
            <!--            <span class="text-gray-500">Calories : 500</span>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { IRecipe } from "../models/recipe/recipe";

export default defineComponent({
  name: "Recipes",
  setup() {
    // const store = recipesStore();
    const searchQuery = ref("");
    const recipes = ref<IRecipe[]>([]);

    const filteredRecipes = computed(() => {
      return recipes.value.filter(
        (recipe) =>
          recipe.title
            .toLowerCase()
            .includes(searchQuery.value.toLowerCase()) ||
          recipe.description
            ?.toLowerCase()
            .includes(searchQuery.value.toLowerCase())
      );
    });

    return {
      recipes,
      filteredRecipes,
      searchQuery,
    };
  },
});
</script>
