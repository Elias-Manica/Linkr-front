import axios from "axios";

const BASE_URL = "http://localhost:4000";
const DEPLOY_URL = "https://back-projetao-linkr-aefj.herokuapp.com";

function createHeaders(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return config;
}

function postSignUp(body) {
  const promise = axios.post(`${DEPLOY_URL}/signup`, body);
  return promise;
}

function getUserPosts(id) {
  const result = axios.get(`${DEPLOY_URL}/users/${id}`);
  return result;
}

function searchUsers(text) {
  const promise = axios.post(`${DEPLOY_URL}/users`, { text });
  return promise;
}

function postLogin(body) {
  const promise = axios.post(`${DEPLOY_URL}/signin`, body);
  return promise;
}

function postLogout(token) {
  const config = createHeaders(token);
  const promise = axios.delete(`${DEPLOY_URL}/logout`, config);
  return promise;
}

async function verifyFollow(token, id) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = await axios.get(`${DEPLOY_URL}/follow/${id}`, config);
  return promise;
}
async function followingUser(token, id) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = await axios.post(`${DEPLOY_URL}/follow/${id}`, {}, config);
  return promise;
}

async function unfollowing(token, id) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = await axios.post(`${DEPLOY_URL}/unfollow/${id}`, {}, config);
  return promise;
}

async function getFollowingList(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = await axios.get(`${DEPLOY_URL}/users/get/following`, config);
  return promise;
}

export {
  postSignUp,
  postLogin,
  postLogout,
  searchUsers,
  getUserPosts,
  verifyFollow,
  followingUser,
  unfollowing,
  getFollowingList,
};
