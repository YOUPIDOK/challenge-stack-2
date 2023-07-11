<template>
  <div>
    <section class="py-10">
      <div class="container mx-auto">
        <h2 class="text-3xl text-gray-800 font-bold mb-6">Recherchez une recette</h2>
        <p class="text-gray-600">Trouvez la recette idéale en utilisant notre fonction de recherche. Entrez les ingrédients que vous avez sous la main et découvrez les recettes correspondantes.</p>
        <router-link :to="{ name: 'Recipes' }" class="bg-blue-500 text-white hover:bg-blue-600 text-sm font-bold uppercase mt-6 py-2 px-4 rounded-full inline-block">Rechercher une recette</router-link>
      </div>
    </section>

    <section class="bg-gray-100 py-10">
      <div class="container mx-auto">
        <h2 class="text-3xl text-gray-800 font-bold mb-6">Créez votre recette personnalisée</h2>
        <p class="text-gray-600">Laissez libre cours à votre créativité culinaire en créant votre propre recette à partir de rien. Ajoutez les ingrédients, les étapes et obtenez les informations nutritionnelles détaillées.</p>
        <router-link :to="{ name: 'NewRecipe' }" class="bg-blue-500 text-white hover:bg-blue-600 text-sm font-bold uppercase mt-6 py-2 px-4 rounded-full inline-block">Créer une recette</router-link>
      </div>
    </section>


    <section class="py-10">
      <div class="container mx-auto">
        <h2 class="text-3xl text-gray-800 font-bold mb-6">Mangez sainement et équilibré</h2>
        <p class="text-gray-600">Notre site vous offre également des conseils et des astuces pour vous aider à maintenir une alimentation saine et équilibrée. Nous vous proposons des articles sur les différents groupes alimentaires, les régimes spécifiques (végétarien, végétalien, sans gluten, etc.) et des conseils pour atteindre vos objectifs nutritionnels.</p>
      </div>
    </section>

    <section class="bg-gray-100 py-10">
      <div class="container mx-auto">
        <h2 class="text-3xl text-gray-800 font-bold mb-6">Communauté et partage</h2>
        <p class="text-gray-600">Rejoignez notre communauté de passionnés de nutrition et de cuisine saine. Vous pouvez partager vos recettes préférées, discuter avec d'autres membres, trouver de l'inspiration et obtenir des conseils personnalisés. Nous croyons en l'importance du partage et de l'entraide dans le cheminement vers une alimentation plus saine.</p>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { RouterLink } from "vue-router";

export default defineComponent({
  components: {
    RouterLink
  },
  name: 'Recipes',
  setup() {
    return {
    };
  },
});
</script>
