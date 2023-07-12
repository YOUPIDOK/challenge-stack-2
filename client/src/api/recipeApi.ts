import axios from "axios";
import moment from "moment";

const urn = 'http://localhost:3000/V1/recipes';

/**
 * Recipe creation, returns recipe with id or error
 * @param recipe
 */
export async function createRecipe({recipe}: { recipe: any }) {
    recipe.ingredients.forEach((ingredient: any) => {
        delete ingredient.nutrition.id;
    });

    recipe.publication_date = moment().format('YYYY-MM-DD')

    return await axios.post(urn, recipe).then((res) => res.data);
}


/**
 * Retrieve a recipe by id
 * @param id
 */
export async function getRecipe(id: string) {
    return await axios.get(urn + '/' + id).then((response) => { return response.data });
}
