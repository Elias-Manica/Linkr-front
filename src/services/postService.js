import axios from "axios";

const BASE_URL = "https://back-projetao-linkr-aefj.herokuapp.com";
const LOCAL_HOST = "http://localhost:4000";

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

async function deletePost(token, id) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const promise = await axios.delete(`${LOCAL_HOST}/post/${id}`, config);
  return promise;
}

//teste

export { listPosts, listHashtags, listOneHashtag, deletePost };
