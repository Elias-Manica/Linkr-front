import axios from "axios";

const BASE_URL = "http://localhost:4000";

function postSignUp(body) {
    const promise = axios.post(`${BASE_URL}/signup`, body);
    return promise;
}

function postLogin(body) {
    const promise = axios.post(`${BASE_URL}/signin`, body);
    return promise;
}

export { postSignUp, postLogin };