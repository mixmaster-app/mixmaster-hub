import Type from "@/metier/hench/HenchType.js";
import Stats from "@/metier/hench/HenchStats.js";
import Zone from "@/metier/hench/Zone.js";
import HenchMix from "@/metier/hench/HenchMix.js";

class Hench {
  id;
  name;
  type;
  stats;
  atk_type;
  minimum_level;
  maximum_level;
  img_url;
  imageAvatar;
  is_dropable;
  is_mixable;
  is_questable;
  zones;
  mixs;
  evolutions;

  constructor(data) {
    this.id = data.id || 0;
    this.name = data.name || "";
    this.type = new Type(data.type.id, data.type.name) || undefined;
    this.stats = new Stats(data.stats) || undefined;
    this.atk_type = data.atk_type || 1; // Distance(2) ou Corps à corps(1)
    this.minimum_level = data.minimum_level || 0;
    this.maximum_level = data.maximum_level || 0;
    this.img_url = data.img_url || "";
    this.imageAvatar = this.getImageAvatar();
    this.is_dropable = data.is_dropable == 1 || false;
    this.is_mixable = data.is_mixable == 1 || false;
    this.is_questable = data.is_questable == 1 || false;
    this.zones = this.parseZones(data.zones) || [];
    this.mix = this.parseMixs(data.mix) || [];
    this.evolutions = this.parseMixs(data.evolutions) || [];
  }

  getImageTypePath() {
    return require("@/assets/hench/type/" + this.type.id.toString() + ".png");
  }

  getImageAvatar() {
    return "https://mixmaster-online.fr/img/fi001/" + this.id + ".bmp";
  }

  getId() {
    return "0".repeat(4 - this.id.toString().length) + this.id;
  }

  hasEvolutions() {
    return this.evolutions.length > 0;
  }

  getEvolutions() {
    let evolutionList = [];
    let checkLabelExist = [];
    this.evolutions.forEach(item => {
      const henchLibelle = item.hench_result.name;
      if (checkLabelExist.indexOf(henchLibelle) == -1) {
        checkLabelExist.push(henchLibelle);
        evolutionList.push(item);
      }
    });
    return evolutionList;
  }

  getAllEvolutions() {
    const evolutionsLibelleList = [];
    for (let i = 0; i < this.evolutions.length; i++) {
      const henchLibelle = this.evolutions[i].hench_result.name;
      if (evolutionsLibelleList.indexOf(henchLibelle) == -1) {
        evolutionsLibelleList.push(henchLibelle);
      }
    }
    let res = "No evolutions for this hench";
    if (evolutionsLibelleList.length >= 1) {
      res = evolutionsLibelleList.join(", ");
    }
    return res;
  }

  parseZones(data) {
    const zoneList = [];
    const zoneLength = data.length;
    for (let i = 0; i < zoneLength; i++) {
      const item = data[i];
      zoneList.push(new Zone(item));
    }
    return zoneList;
  }

  parseMixs(data) {
    const henchsMixsList = [];
    const henchMixLength = data?.length;
    for (let i = 0; i < henchMixLength; i++) {
      const item = data[i];
      henchsMixsList.push(new HenchMix(item));
    }
    return henchsMixsList;
  }
}

export { Hench };
