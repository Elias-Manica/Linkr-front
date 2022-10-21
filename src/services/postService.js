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

export { listPosts, listHashtags };
