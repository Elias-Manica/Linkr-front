import axios from "axios";

const BASE_URL = "http://localhost:4000";
const DEPLOY_URL = "https://back-projetao-linkr-aefj.herokuapp.com";

function postSignUp(body) {
	const promise = axios.post(`${BASE_URL}/signup`, body);
	return promise;
}

function getUserInfo(id) {
	const result = axios.get(`${DEPLOY_URL}/users/${id}`);
	return result;
}

function searchUsers(text) {
	const result = axios.get(`${DEPLOY_URL}/users`, { text });
	return result;
}

export { postSignUp, searchUsers };
