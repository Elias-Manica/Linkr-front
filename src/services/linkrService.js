import axios from "axios";

const BASE_URL = "http://localhost:4000";

function createHeaders(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return config;
}

function postSignUp(body) {
    const promise = axios.post(`${BASE_URL}/signup`, body);
    return promise;
}

function postLogin(body) {
    const promise = axios.post(`${BASE_URL}/signin`, body);
    return promise;
}

function postLogout(token) {
    const config = createHeaders(token);
    const promise = axios.delete(`${BASE_URL}/logout`, config);
    return promise;
}

export { postSignUp, postLogin, postLogout };