<template>
  <h1 class="m-2 font-bold">Nouvelle recette</h1>
  <RecipeForm />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RecipeForm from "../components/RecipeForm.vue";

export default defineComponent({
    name: "NewRecipe",
    components: { RecipeForm },
    setup() {
        return {};
    },
});
</script>
