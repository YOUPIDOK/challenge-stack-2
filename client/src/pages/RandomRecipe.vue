<template>
  <h1 class="m-2 font-bold">Recette aléatoire</h1>
  <RecipeForm :is-random-mod="true"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RecipeForm from "../components/RecipeForm.vue";

export default defineComponent({
    name: "RandomRecipe",
    components: { RecipeForm },
    setup() {
        return {};
    },
});
</script>
