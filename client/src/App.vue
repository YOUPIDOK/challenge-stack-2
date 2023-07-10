<style>
   @import "styles/style.css";
</style>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import {recipesStore} from "./stores/recipes";
import {onMounted} from "vue";

export default {
  name: 'App',

  setup() {
    const store = recipesStore();

    onMounted(async () => {
      await store.fetchRecipes();
    });
  },
};
</script>
