class Item {
  id;
  libelle;
  description;
  imagePath;

  constructor(id, name, description = "") {
    this.id = id || 0;
    this.name = name || "";
    this.description = description;
    this.imagePath = this.getImagePath();
  }

  getImagePath() {
    try {
      return require("@/assets/img/item/mix/" + this.id.toString() + ".png");
    } catch (err) {
      return false;
    }
  }
}

export default Item;
