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
    get(`/henchs?limit=100`)
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
  limit,
  types,
  minimumLevel,
  maximumLevel
}) {
  console.log({
    search: search,
    limit: limit,
    types: types.join(","),
    minimumLevel: minimumLevel,
    maximumLevel: maximumLevel
  });
  search = encodeURI(search);
  let url = `/hench/filter/${search}?`;
  if (types.length) {
    url += `&types=${types.join(",")}`;
  }
  url += `&minimumLevel=${minimumLevel}`;
  url += `&maximumLevel=${maximumLevel}`;
  console.log(url);

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
    get(`/hench/search/${search}`)
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
    get(`/hench/search/${search}?limit=1`)
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
    get(`/hench/id/${id}/mixs`)
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
