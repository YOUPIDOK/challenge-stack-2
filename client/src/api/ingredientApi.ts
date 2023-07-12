import axios from "axios";

const urn = 'http://localhost:3000/V1/nutritions';

/**
 * Search for an ingredient
 * @param query
 */
export async function searchIngredients(query: string) {
    return await axios.get(urn, {params: {search: query}}).then((response) => { return response.data });
}


export async function getIngredients() {
    return await axios.get(urn).then((response) => { return response.data });
}

