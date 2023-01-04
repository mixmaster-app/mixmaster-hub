const API_BASE_URL = "http://127.0.0.1:3000/api";
const API_DEFAULT_TIMEOUT = 3600;
import axios from "axios";

function createUrl(path) {
  return API_BASE_URL + path;
}

function get(url, timeout = API_DEFAULT_TIMEOUT) {
  return axios({
    method: "get",
    url: createUrl(url),
    timeout: timeout,
    headers: {
      authorization: localStorage.getItem("user_identity")
    }
  });
}

export { API_BASE_URL as apiUrl, createUrl, get };
