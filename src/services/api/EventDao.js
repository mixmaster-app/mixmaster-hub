import { get } from "@/services/api/Config.js";
import { Event } from "@/metier/Event.js";

function castResponseToEventArray(data) {
  const resultLength = data.length;
  const res = [];
  for (let i = 0; i < resultLength; i++) {
    const item = data[i];
    if (item != undefined) res.push(new Event(item));
  }
  return res;
}

async function getAllEventFrom(year, month) {
  return new Promise((resolve, reject) => {
    get(`/events/${month}/${year}`)
      .then(result => {
        return resolve(castResponseToEventArray(result.data));
      })
      .catch(error => {
        return reject(error);
      });
  });
}

export { getAllEventFrom };
