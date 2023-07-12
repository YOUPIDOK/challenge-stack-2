import axios from "axios";
import moment from "moment";

const url = import.meta.env.VITE_SERVER_URL + "/recipes";

/**
 * Recipe creation, returns recipe with id or error
 * @param recipe
 */
export async function createRecipe({ recipe }: { recipe: any }) {
  recipe.ingredients.forEach((ingredient: any) => {
    delete ingredient.nutrition.id;
  });

  recipe.publication_date = moment().format("YYYY-MM-DD");

  return await axios.post(url, recipe).then((res) => res.data);
}

/**
 * Retrieve a recipe by id
 * @param id
 */
export async function getRecipe(id: string) {
  return await axios.get(url + "/" + id).then((response) => {
    return response.data;
  });
}

/**
 * Retrieve all recipes
 * @param id
 */
export async function getRecipes() {
  return await axios.get(url + "?limit=1000").then((response) => {
    return response.data.results;
  });
}
