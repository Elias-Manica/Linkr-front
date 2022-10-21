import axios from "axios";

const BASE_URL = "http://localhost:4000";
const DEPLOY_URL = "https://back-projetao-linkr-aefj.herokuapp.com";

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

function getUserInfo(id) {
	const result = axios.get(`${DEPLOY_URL}/users/${id}`);
	return result;
}

function searchUsers(text) {
	const promise = axios.post(`${BASE_URL}/users`, { text });
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

export { postSignUp, postLogin, postLogout, searchUsers, getUserInfo };
