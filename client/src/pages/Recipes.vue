<template>
  <div class="container mx-auto mt-10">
    <h2 class="text-3xl text-gray-800 font-bold mb-6">
      Découvrez nos recettes import { RouterLink } from "vue-router";
    </h2>

    <div class="mb-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Rechercher une recette"
        class="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="recipe in filteredRecipes"
        :key="recipe.id"
        class="bg-white rounded-lg shadow-md"
      >
        <img
          :src="recipe.image"
          alt="Recette 1"
          class="h-40 w-full object-cover rounded-t-lg"
        />
        <div class="p-4">
          <h3 class="text-xl text-gray-800 font-semibold mb-2">
            {{ recipe.title }}
          </h3>
          <p class="text-gray-600 mb-4">{{ recipe.description }}</p>
          <div class="flex justify-between items-center">
            <router-link :to="{ name: 'Recipe', params: {id: recipe.id} }"
                         class="bg-blue-500 text-white hover:bg-blue-600 text-sm font-bold py-2 px-4 rounded-full"
            >Voir la recette</router-link>
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
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "Recipes",
  components: { RouterLink },
  setup() {
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
      searchQuery,
      recipes,
      filteredRecipes,
    };
  },
  async mounted() {
    const response = await fetch("http://localhost:3000/v1/recipes?limit=1000");
    this.recipes = (await response.json()).results;
  },
});
</script>
