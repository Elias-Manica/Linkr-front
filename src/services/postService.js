import axios from "axios";

const BASE_URL = "https://back-projetao-linkr-aefj.herokuapp.com";

async function listPosts() {
	const promise = await axios.get(`${BASE_URL}/timeline`);
	return promise;
}

async function listHashtags() {
	const promise = await axios.get(`${BASE_URL}/hashtag`);
	return promise;
}

async function listOneHashtag(hashtag) {
	const promise = await axios.get(`${BASE_URL}/hashtag/${hashtag}`);
	return promise;
}

//teste

export { listPosts, listHashtags, listOneHashtag };
