import axios from "axios";

const urn = 'http://localhost:3000/V1/nutritions';
export async function searchIngredients(query: string) {
    return await axios.get(urn, {params: {search: query}}).then((response) => { return response.data });
}
