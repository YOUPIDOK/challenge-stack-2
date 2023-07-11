<template>
  <div>
    <h1 class="text-red-700">Recettes de cuisine</h1>
    <ul>
      <li v-for="recipe in store.recipes" :key="recipe.id">
        {{ recipe.name }}
      </li>
    </ul>
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
