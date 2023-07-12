import axios from "axios";
import moment from "moment";

const urn = 'http://localhost:3000/V1/auth';

/**
 * User login
 * Returns user and tokens or error message
 * @param email
 * @param password
 */
export async function login(email, password) {
    return await axios.post(urn + '/login', {email: email, password: password})
        .then((res) => res.data)
        .catch((err) => err.response.data);
}

