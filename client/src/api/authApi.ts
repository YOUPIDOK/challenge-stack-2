import axios from "axios";
import moment from "moment";

const urn = 'http://localhost:3000/V1/auth';
export async function searchRecipe(query: string) {
    return await axios.get(urn, {params: {search: query}}).then((response) => { return response.data });
}

export async function login(email, password) {
    return await axios.post(urn + '/login', {email: email, password: password})
        .then((res) => res.data)
        .catch((err) => err.response.data);
}

