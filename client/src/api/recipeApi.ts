import axios from "axios";
import moment from "moment";

const urn = 'http://localhost:3000/V1/recipes';
export async function searchRecipe(query: string) {
    return await axios.get(urn, {params: {search: query}}).then((response) => { return response.data });
}

export async function createRecipe({recipe}: { recipe: any }) {
    recipe.ingredients.forEach((ingredient: any) => {
        delete ingredient.nutrition.id;
    });

    recipe.publication_date = moment().format('YYYY-MM-DD')

    return await axios.post(urn, recipe).then((res) => res.data);
}

export async function searchRecipes(query: string) {
    return await axios.get(urn, {params: {search: query}}).then((response) => { return response.data });
}

export async function getRecipe(id: string) {
    return await axios.get(urn + '/' + id).then((response) => { return response.data });
}
