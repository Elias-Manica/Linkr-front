import axios from "axios";

const BASE_URL = "https://back-projetao-linkr-aefj.herokuapp.com";

async function listPosts() {
  const promise = await axios.get(`${BASE_URL}/timeline`);
  return promise;
}

export { listPosts };
