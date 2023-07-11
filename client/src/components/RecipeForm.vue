<template>
  <form @submit.prevent="handleSubmit" action="" class="mt-3">
    <div class="grid grid-cols-3 gap-4">
      <div class="p-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="titre">Titre :</label>
          <input required v-model="recipe.title" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" type="text" id="titre" placeholder="Ma super recette">
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="description">Description :</label>
          <textarea required v-model="recipe.description" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" id="description" placeholder="Une description"></textarea>
        </div>
      </div>

      <div class="p-4">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Étapes :</label>
          <div id="steps">
            <div class="mb-3" v-for="(step, index) in recipe.steps" :key="index">
              <div class="flex">
                <input v-model="step.title" required class="w-full px-1 py-1 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mr-1" type="text" id="titre" placeholder="Titre de l'étape">
                <button type="button" class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded" @click="removeStep(index)">Supprimer</button>
              </div>
              <textarea v-model="step.description" required class="w-full px-1 py-1 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" id="description" placeholder="Description de l'étape"></textarea>
            </div>
            <button type="button" id="addstep" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" @click="addStep">Ajouter une étape</button>
          </div>
        </div>
      </div>

      <div class="p-4">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Ingrédients :</label>
          <div id="ingredients" >
            <div class="mb-2 flex" v-for="(ingredient, index) in recipe.ingredients" :key="index">
              <Combobox as="div" v-model="selectedIngredient">
                <div class="relative">
                  <ComboboxInput class="px-4 py-2  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                 @change="query = $event.target.value && ingredientChange(index)" :display-value="(ingredient) => ingredient?.name"
                                 :placeholder="selectedIngredient ? '' : 'Ingrédient'"
                                 required
                  />
                  <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </ComboboxButton>

                  <ComboboxOptions v-if="filteredIngredients.length > 0" class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    <ComboboxOption v-for="ingredient in filteredIngredients" :key="ingredient.id" :value="ingredient" as="template" v-slot="{ active, selected }">
                      <li :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-indigo-600 text-white' : 'text-gray-900']">
                        <span :class="['block truncate', selected && 'font-semibold']">
                          {{ ingredient.name }}
                        </span>
                        <span v-if="selected" :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-indigo-600']">
                          <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                      </li>
                    </ComboboxOption>
                  </ComboboxOptions>
                </div>
              </Combobox>
              <input required v-model="ingredient.quantity" type="number" step="1" min="1" name="ingredientQuantity[]" placeholder="Quantité" class="ml-2 border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
              <button type="button" class="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="removeIngredient(index)">Supprimer</button>
            </div>
            <button type="button" id="addIngredient" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" @click="addIngredient">Ajouter un ingrédient</button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2" type="submit">{{ isCreateMod ? "Créer" : "Modifier" }}</button>
    </div>
  </form>
</template>

<script>
import { computed, ref } from 'vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/vue'
import {searchIngredients} from '../api/ingredientApi';
export default {
  name: 'RecipeForm',
  components: {ComboboxLabel, Combobox, ComboboxInput, ComboboxButton, ComboboxOptions, ComboboxOption, CheckIcon, ChevronUpDownIcon},
  props: {
    isCreateMod: {
      type: Boolean,
      required: false,
      default: true,
    },
    recipeId: {
      type: Object,
      required: false,
    },
  },
  setup(props) {
    const query = ref('');
    const selectedIngredient = ref(null);
    const filteredIngredients = computed(() => searchIngredients(query.value));

    const recipe = ref(props.isCreateMod ?
        {title: "", description: "", ingredients: [], steps: []} :
        // Object.assign({}, store.getDonationById(parseInt(props.donationId)))
        {title: "", description: "", ingredients: [], steps: []}
    );

    return {
      query,
      selectedIngredient,
      filteredIngredients,
      recipe,
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.recipe);

      this.resetForm();
    },
    resetForm() {
      // Réinitialiser les champs du formulaire
    },
    addIngredient() {
      this.recipe.ingredients.push({name: "", quantity: ""});
    },
    addStep() {
      this.recipe.steps.push({title: "", description: ""});
    },
    removeIngredient(index) {
      this.recipe.ingredients.splice(index, 1);
    },
    removeStep(index) {
      this.recipe.steps.splice(index, 1);
    },
    ingredientChange(index) {
      console.log(this.selectedIngredient);
      this.recipe.ingredients[index]
    },
  }
};
</script>
