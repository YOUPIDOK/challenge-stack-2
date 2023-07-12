<template>
  titre : {{recipe?.title}}
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import { getRecipe } from '../api/recipeApi';
export default defineComponent({
  name: 'Recipes',
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
