<template>
  <div id="app">
    <Recipes />
  </div>
</template>

<script>
import Recipes from './pages/Recipes.vue';
import {recipesStore} from "./stores/recipes";
import {onMounted} from "vue";

export default {
  name: 'App',
  components: {
    Recipes,
  },

  setup() {
    const store = recipesStore();

    onMounted(async () => {
      await store.fetchRecipes();
    });
  },
};
</script>
