import { defineStore } from "pinia";
import {fetchRecipes} from "../api.ts";

export const recipesStore = defineStore("recipes", {
  state: () => ({
    recipes: [],
  }),
  getters: {
    // getNbDonations: (state) => {
    //   return state.donations.length;
    // },
    // getAverageDonation: (state) => {
    //   if (state.donations.length === 0) {
    //     return 0;
    //   }
    //
    //   let average = state.donations.reduce((acc, donation) => acc + donation.total_price, 0) / state.donations.length;
    //
    //   return average.toFixed(2);
    // },
    // getTotalDonations: (state) => {
    //   if (state.donations.length === 0) {
    //     return 0;
    //   }
    //
    //   return state.donations.reduce((acc, donation) => acc + donation.total_price, 0);
    // },
    // getBestDonation: (state) => {
    //   if (state.donations.length === 0) {
    //     return 0;
    //   }
    //
    //   return state.donations.reduce((acc, donation) => acc > donation.total_price ? acc : donation.total_price, 0);
    // },
    // getDonationById: (state) => (id) => {
    //   return state.donations.find((donation) => donation.id === id);
    // }
  },
  actions: {
    async fetchRecipes() {
      this.recipes = await fetchRecipes();
    },
  },
  // actions: {
    // initDonations(donations) {
    //   this.donations = donations;
    // },
    // removeDonation(id) {
    //   this.donations = this.donations.filter((donation) => donation.id !== id);
    // },
    // addDonation(donation) {
    //   this.donations.push(donation);
    // },
    // updateDonation(donation) {
    //   const index = this.donations.findIndex((donation) => donation.id === donation.id);
    //   this.donations[index] = donation;
    // }
  // }
});
