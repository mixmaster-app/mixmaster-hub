import { get } from "@/services/Api/Access.js";
import { Hench } from "@/models/hench/Hench.js";

async function castResponseToHenchArray(result) {
  const henchListLength = result.length;
  const res = [];
  for (let i = 0; i < henchListLength; i++) {
    const item = result[i];
    if (item != undefined) res.push(new Hench(item));
  }
  return res;
}

async function castResponseToHench(data) {
  return new Hench(data);
}

/**
 * Get every hench of the game
 *
 * @return Array of every hench
 */
async function getAllHenchs() {
  return new Promise((resolve, reject) => {
    get(`/henchs/q?limit=100`)
      .then(result => {
        return resolve(castResponseToHenchArray(result.data));
      })
      .catch(error => {
        return reject(error);
      });
  });
}

async function getAllHenchWithFilter({
  search,
  types,
  minimumLevel,
  maximumLevel
}) {
  search = encodeURI(search);
  let url = `/henchs/q?name=${search}`;
  if (types.length) {
    url += `&types=${types.join(",")}`;
  }
  url += `&level_minimum=${minimumLevel}`;
  url += `&level_maximum=${maximumLevel}`;

  return new Promise((resolve, reject) => {
    get(url)
      .then(result => {
        return resolve(castResponseToHenchArray(result.data));
      })
      .catch(error => {
        return reject(error);
      });
  });
}

async function getAllHenchWhereLibelleContains(search) {
  search = encodeURI(search);
  return new Promise((resolve, reject) => {
    get(`/henchs/q?name=${search}`)
      .then(result => {
        return resolve(castResponseToHenchArray(result.data));
      })
      .catch(error => {
        return reject(error);
      });
  });
}

async function getOneHenchWhereLibelleContains(search) {
  search = encodeURI(search);
  return new Promise((resolve, reject) => {
    get(`/henchs/q?name=${search}&limit=1`)
      .then(result => {
        return resolve(castResponseToHench(result.data[0]));
      })
      .catch(error => {
        return reject(error);
      });
  });
}

async function getAllMixsForHenchId(id) {
  return new Promise((resolve, reject) => {
    get(`/hench/${id}/mixs`)
      .then(result => {
        return resolve(result.data);
      })
      .catch(error => {
        return reject(error);
      });
  });
}

async function getOneById(id) {
  return new Promise((resolve, reject) => {
    get(`/hench/${id}`)
      .then(res => {
        return resolve(castResponseToHench(res.data));
      })
      .catch(error => {
        return reject(error);
      });
  });
}

export {
  getAllHenchs,
  getAllHenchWhereLibelleContains,
  getAllHenchWithFilter,
  getOneHenchWhereLibelleContains,
  getAllMixsForHenchId,
  getOneById
};
