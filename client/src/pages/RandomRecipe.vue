<template>
aa
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
