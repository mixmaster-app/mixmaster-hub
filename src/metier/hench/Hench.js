import Type from "@/metier/hench/HenchType.js";
import Stats from "@/metier/hench/HenchStats.js";
import Zone from "@/metier/hench/Zone.js";
import HenchMix from "@/metier/hench/HenchMix.js";

class Hench {
  id;
  libelle;
  type;
  stats;
  attackType;
  levelMinimum;
  levelMaximum;
  imageUrl;
  imageAvatar;
  dropable;
  mixable;
  zones;
  henchMixs;
  henchEvolutions;

  constructor(data) {
    this.id = data.id || 0;
    this.libelle = data.libelle || "";
    this.type = new Type(data.type.id, data.type.libelle) || undefined;
    this.stats = new Stats(data.stats) || undefined;
    this.attackType = data.attackType || 1; // Distance(2) ou Corps à corps(1)
    this.levelMinimum = data.levelMinimum || 0;
    this.levelMaximum = data.levelMaximum || 0;
    this.imageUrl = data.imageUrl || "";
    this.imageAvatar = this.getImageAvatar();
    this.dropable = data.dropable == 1 || false;
    this.mixable = data.mixable == 1 || false;
    this.zones = this.parseZones(data.zones) || [];
    this.henchMixs = this.parseMixs(data.henchMixs) || [];
    this.henchEvolutions = this.parseMixs(data.henchEvolutions) || [];
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
    return this.henchEvolutions.length > 0;
  }

  getAllEvolutions() {
    const evolutionsLibelleList = [];
    for (let i = 0; i < this.henchEvolutions.length; i++) {
      const henchLibelle = this.henchEvolutions[i].henchResult.libelle;
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
    const henchMixLength = data.length;
    for (let i = 0; i < henchMixLength; i++) {
      const item = data[i];
      henchsMixsList.push(new HenchMix(item));
    }
    return henchsMixsList;
  }
}

export { Hench };
