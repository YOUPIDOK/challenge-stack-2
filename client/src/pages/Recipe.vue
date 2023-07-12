<template>
  <div class="container mx-auto p-4">
    <!-- Afficher le titre de la recette -->
    <h1 class="text-3xl font-bold">{{ recipe.title }} ({{ getKcal(recipe) }} Kcal)</h1>

    <!-- Afficher l'image de la recette -->
    <img :src="recipe.image" :alt="recipe.title" class="my-4 rounded-md">

    <!-- Afficher la description de la recette -->
    <p class="text-gray-700">{{ recipe.description }}</p>

    <!-- Afficher la liste des ingrédients -->
    <h2 class="text-xl font-bold my-4">Ingrédients :</h2>
    <ul>
      <li v-for="ingredient in recipe.ingredients" :key="ingredient.nutrition.name" class="my-2">
        {{ ingredient.nutrition.name }} - {{ ingredient.quantity }} {{ ingredient.nutrition.unit }}
      </li>
    </ul>

    <!-- Afficher les étapes de la recette -->
    <h2 class="text-xl font-bold my-4">Étapes :</h2>
    <ol>
      <li v-for="step in recipe.steps" :key="step.title" class="my-4">
        <h3 class="font-bold">{{ step.title }}</h3>
        <p>{{ step.description }}</p>
      </li>
    </ol>
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
