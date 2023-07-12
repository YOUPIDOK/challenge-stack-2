import axios from "axios";

const url = import.meta.env.VITE_SERVER_URL + '/auth';

/**
 * User login
 * Returns user and tokens or error message
 * @param email
 * @param password
 */
export async function login(email: string, password: string) {
    return await axios.post(url + '/login', {email: email, password: password})
        .then((res) => res.data)
        .catch((err) => err.response.data);
}

