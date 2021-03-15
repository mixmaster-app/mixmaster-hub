class Item {
  id;
  libelle;
  description;

  constructor(id, libelle, description = "") {
    this.id = id;
    this.libelle = libelle;
    this.description = description;
  }
}

export default Item;
