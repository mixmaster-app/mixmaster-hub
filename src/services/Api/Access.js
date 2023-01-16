import axios from "axios";
import { VueStore } from "../../store";
import Config from "../Config";

function createUrl(path) {
  return Config.Api.baseUrl + path;
}

function get(url, timeout = Config.Api.timeout) {
  return axios({
    method: "get",
    url: createUrl(url),
    timeout: timeout,
    headers: {
      authorization: VueStore.get("user_identity")
    }
  });
}

export { get };
