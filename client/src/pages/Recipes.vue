<template>
  <div class="container mx-auto mt-10">
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

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <article v-for="recipe in filteredRecipes" :key="recipe.id" class="group">
        <img
          alt="Lava"
          :src="recipe.image"
          class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
        />

        <div class="p-4">
          <RouterLink :to="{ name: 'Recipe', params: { id: recipe.id } }">
            <h3 class="text-lg font-medium text-gray-900">
              {{ recipe.title }}
            </h3>
          </RouterLink>

          <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {{ recipe.description }}
          </p>

          <span class="text-gray-500">
            Calories :
            {{
              recipe.ingredients.reduce(
                (prev, acc) => prev + acc.nutrition.energ_kcal * acc.quantity,
                0
              ) / 100
            }}
          </span>
        </div>
      </article>
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
    const response = await fetch("http://localhost:3000/v1/recipes");
    this.recipes = (await response.json()).results;
  },
});
</script>
