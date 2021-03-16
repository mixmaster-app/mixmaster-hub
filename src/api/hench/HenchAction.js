import { get } from "@/api/config";
import { Hench } from "@/metier/hench/Hench.js";

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
    get(`/henchs?size=80`)
      .then(result => {
        return resolve(castResponseToHenchArray(result.data));
      })
      .catch(error => {
        return reject(error);
      });
  });
}

/**
 * Get a list of hench from a certain zone
 *
 * @param  id Id of the zone
 * @return    Array of every hench in the zone
 */
async function getAllByZoneId(id) {
  return new Promise((resolve, reject) => {
    get(`/henchs/zone/${id}`)
      .then(result => {
        return resolve(castResponseToHenchArray(result.data));
      })
      .catch(error => {
        return reject(error);
      });
  });
}

async function getAllHenchWhereLibelleContains(search) {
  return new Promise((resolve, reject) => {
    get(`/henchs/libelle/${search}`)
      .then(result => {
        return resolve(castResponseToHenchArray(result.data));
      })
      .catch(error => {
        return reject(error);
      });
  });
}

async function getOneHenchWhereLibelleContains(search) {
  return new Promise((resolve, reject) => {
    get(`/henchs/libelle/${search}?size=1`)
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
    get(`/henchs/id/${id}/mixs`)
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
    get(`/henchs/id/${id}`)
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
  getAllByZoneId,
  getAllHenchWhereLibelleContains,
  getOneHenchWhereLibelleContains,
  getAllMixsForHenchId,
  getOneById
};
