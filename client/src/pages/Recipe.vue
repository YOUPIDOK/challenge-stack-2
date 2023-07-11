<template>
  titre : {{recipe.title}}
</template>

<script>
import { defineComponent } from 'vue';
import { getRecipe } from '../api/recipeApi';

export default defineComponent({
  name: 'Recipes',
  setup() {
    return {
      recipeId: null,
      recipe: null,
    };
  },
  async mounted() {
    this.recipe = await getRecipe(this.$route.params.id);
  },
});
</script>
