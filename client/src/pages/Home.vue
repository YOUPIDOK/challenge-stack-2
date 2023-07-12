<template>
  <div>
    <section class="hero-section bg-gradient-to-r from-green-500 via-green-300 to-green-100 py-24 relative overflow-hidden text-center">
      <div class="container mx-auto text-center relative z-10">
        <h2 class="text-6xl text-white font-bold mb-8 tracking-wide">Bienvenue sur NutriGuide</h2>
        <p class="text-white text-xl mb-8">Votre partenaire de confiance pour un mode de vie sain et une alimentation équilibrée.</p>
        <router-link :to="{ name: 'Recipes' }" class="mt-8 inline-block bg-white hover:bg-gray-200 text-green-500 font-semibold py-3 px-6 rounded-full">Explorer les recettes</router-link>
      </div>
      <div class="absolute bottom-0 w-full h-48 bg-green-100 rounded-t-full"></div>
      <div class="w-64 h-64 absolute top-0 right-0 bg-green-300 rounded-full -mr-32 -mt-32 transform rotate-45 hidden lg:block"></div>
    </section>

    <section class="py-24">
      <div class="container mx-auto px-6 lg:px-0">
        <h2 class="text-5xl text-green-600 font-bold mb-12 text-center tracking-wide">Notre proposition</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div class="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 transform hover:scale-105">
            <img src="https://img.freepik.com/photos-gratuite/veritable-pyramide-alimentaire-assortiment-nature-morte_23-2150239017.jpg?w=1800&t=st=1689173598~exp=1689174198~hmac=c53d9bd769267336016452147da4c080d6c6aea5c266bc404d1a8efac2b06cfa" alt="Image de nutrition" class="w-full h-64 object-cover">
            <div class="p-8 flex-grow">
              <h3 class="text-2xl text-green-800 font-semibold mb-6">Nutrition équilibrée</h3>
              <p class="text-gray-600 mb-6">Apprenez à manger de façon équilibrée avec nos conseils pratiques et nos guides nutritionnels détaillés.</p>
              <a href="#" class="text-green-500 font-semibold text-lg">En savoir plus</a>
            </div>
          </div>
          <div class="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 transform hover:scale-105">
            <img src="https://img.freepik.com/photos-premium/ingredients-pour-selection-aliments-sains_35641-2995.jpg?w=1800" alt="Image de nutrition" class="w-full h-64 object-cover">
            <div class="p-8 flex-grow">
              <h3 class="text-2xl text-green-800 font-semibold mb-6">Recettes délicieuses</h3>
              <p class="text-gray-600 mb-6">Découvrez une variété de recettes saines et délicieuses pour tous les repas de la journée.</p>
              <a href="#" class="text-green-500 font-semibold text-lg">En savoir plus</a>
            </div>
          </div>
          <div class="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 transform hover:scale-105">
            <img src="https://img.freepik.com/photos-gratuite/salade-fraiche-tomates-concombres-laitue_1426-691.jpg?w=1800" alt="Image de nutrition" class="w-full h-64 object-cover">
            <div class="p-8 flex-grow">
              <h3 class="text-2xl text-green-800 font-semibold mb-6">Conseils personnalisés</h3>
              <p class="text-gray-600 mb-6">Recevez des conseils de nutrition personnalisés en fonction de vos objectifs de santé et de forme physique.</p>
              <a href="#" class="text-green-500 font-semibold text-lg">En savoir plus</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gradient-to-t from-green-200 via-green-100 to-white">
      <div class="container mx-auto px-6 lg:px-0">
        <h2 class="text-5xl text-green-600 font-bold mb-12 text-center tracking-wide">Rejoignez notre communauté</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 transform hover:scale-105">
            <img src="https://img.freepik.com/photos-gratuite/alimentation-saine-equipement-medical_23-2148108966.jpg?w=2000&t=st=1689173559~exp=1689174159~hmac=4c76059392ff2a6bff713da30e61084c76ce58d6c9c69792437ee389591e8531" alt="Image de nutrition" class="w-full h-64 object-cover">
            <div class="p-8 flex-grow">
              <h3 class="text-2xl text-green-800 font-semibold mb-6">Partagez vos recettes</h3>
              <p class="text-gray-600 mb-6">Partagez vos recettes préférées avec notre communauté et découvrez de nouvelles idées de repas sains et délicieux.</p>
              <a href="#" class="text-green-500 font-semibold text-lg">En savoir plus</a>
            </div>
          </div>
          <div class="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 transform hover:scale-105">
            <img src="https://img.freepik.com/photos-gratuite/flay-jeter-du-saladier-poids_23-2148262120.jpg?w=2000&t=st=1689173571~exp=1689174171~hmac=24ad6a4c1b50e8fedc7ede945a26984fb28df94bafbc174544e1e46ddc4cd133" alt="Image de nutrition" class="w-full h-64 object-cover">
            <div class="p-8 flex-grow">
              <h3 class="text-2xl text-green-800 font-semibold mb-6">Atteignez vos objectifs</h3>
              <p class="text-gray-600 mb-6">Accomplissez vos objectifs de santé et de forme physique avec l'aide de notre communauté et nos guides nutritionnels.</p>
              <a href="#" class="text-green-500 font-semibold text-lg">En savoir plus</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
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
