<template>
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
