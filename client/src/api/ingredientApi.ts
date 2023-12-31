import axios from "axios";

const url = import.meta.env.VITE_SERVER_URL + "/nutritions";

/**
 * Search for an ingredient
 * @param query
 */
export async function searchIngredients(query: string) {
  return await axios
    .get(url, { params: { search: query } })
    .then((response) => {
      return response.data;
    });
}


export async function getIngredients() {
    return await axios.get(url).then((response) => { return response.data });
}

