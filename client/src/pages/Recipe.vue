<template>
  <div class="mx-auto p-4 bg-green-50">
    <!-- Titre et Kcal de la recette -->
    <div class="text-center py-10">
      <h1 class="text-5xl font-bold text-green-700 mb-2">{{ recipe.title }}</h1>
      <p class="text-2xl text-green-500 animate-bounce">({{ getKcal(recipe) }} Kcal)</p>
    </div>

    <!-- Image de la recette -->
    <div class="flex justify-center">
      <img :src="recipe.image" :alt="recipe.title" class="w-3/4 h-64 object-cover rounded-lg shadow-lg mb-10">
    </div>

    <!-- Description de la recette -->
    <div class="px-8 mb-10">
      <p class="text-lg text-gray-700 animate-fadeIn">{{ recipe.description }}</p>
    </div>

    <!-- Liste des ingrédients -->
    <div class="px-8 mb-10">
      <h2 class="text-3xl font-bold text-green-600 mb-4 animate-slideInLeft">Ingrédients :</h2>
      <ul>
        <li v-for="ingredient in recipe.ingredients" :key="ingredient.nutrition.name" class="my-2 text-lg text-gray-700 animate-slideInRight">
          <span class="text-green-500 font-bold">{{ ingredient.nutrition.name }}</span> - {{ ingredient.quantity }} {{ ingredient.nutrition.unit }}
        </li>
      </ul>
    </div>

    <!-- Étapes de la recette -->
    <div class="px-8 mb-10">
      <h2 class="text-3xl font-bold text-green-600 mb-4 animate-slideInLeft">Étapes :</h2>
      <ol>
        <li v-for="(step, index) in recipe.steps" :key="step.title" class="my-4 p-4 bg-white rounded shadow-md transition-all hover:shadow-lg animate-slideInRight">
          <div class="font-bold text-green-600 text-xl mb-2">Étape {{ index + 1 }}</div>
          <div class="text-gray-600 text-lg">{{ step.description }}</div>
        </li>
      </ol>
    </div>
  </div>
</template>


<script lang="ts">
import {defineComponent, ref} from 'vue';
import { getRecipe } from '../api/recipeApi';
import {getKcal} from "../services/recipeService.ts";

export default defineComponent({
  name: 'Recipes',
  methods: {getKcal},
  setup() {
    return {
      recipe: ref({}),
    };
  },
  async mounted() {
    this.recipe = await getRecipe(this.$route.params.id);
  },
});
</script>
