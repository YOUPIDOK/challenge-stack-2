<template>
  <div class="container mx-auto mt-10 px-5 md:px-0">
    <div class="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
      <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1512852939750-1305098529bf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Découvrez nos recettes">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
      <h2 class="absolute bottom-0 left-0 text-4xl text-white font-bold mb-6 p-5">Découvrez nos recettes</h2>
    </div>

    <div class="flex space-x-3 mb-8">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Rechercher une recette"
        class="border border-gray-300 rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <article v-for="recipe in filteredRecipes" :key="recipe.id" class="group rounded-lg overflow-hidden shadow-lg transition-all duration-500 transform hover:scale-105">
        <RouterLink :to="{ name: 'Recipe', params: { id: recipe.id } }" class="block">
          <img
            alt="Lava"
            :src="recipe.image"
            class="h-56 w-full object-cover transition-all duration-300 transform group-hover:scale-110"
          />

          <div class="relative p-4 bg-white transition-colors duration-300 group-hover:bg-green-500 group-hover:text-white">
            <h3 class="text-lg font-medium text-gray-900 transition-colors duration-300 group-hover:text-white">
              {{ recipe.title }}
            </h3>

            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 transition-colors duration-300 group-hover:text-white">
              {{ recipe.description }}
            </p>
            
            <div class="absolute bottom-2 right-2 bg-green-500 text-white rounded-full py-1 px-2 text-xs font-bold group-hover:bg-white group-hover:text-green-500">
              {{ getKcal(recipe) }} Kcal
            </div>
          </div>
        </RouterLink>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { IRecipe } from "../models/recipe/recipe";
import { RouterLink } from "vue-router";
import { getKcal } from "../services/recipeService";
import { getRecipes } from "../api/recipeApi";

export default defineComponent({
  name: "Recipes",
  methods: { getKcal },
  components: { RouterLink },
  setup() {
    const searchQuery = ref("");
    const recipes = ref<IRecipe[]>([]);

    const filteredRecipes = computed(() => { // search method
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
    this.recipes = await getRecipes();
  },
});
</script>
