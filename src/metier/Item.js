class Item {
  id;
  libelle;
  description;

  constructor(id, libelle, description = "") {
    this.id = id;
    this.libelle = libelle;
    this.description = description;
  }

  getImagePath() {
    try {
      return require("@/assets/item/mix/" + this.id.toString() + ".png");
    } catch (err) {
      return false;
    }
  }
}

export default Item;
