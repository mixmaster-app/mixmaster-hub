class Type {
  id;
  name;

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

function getTypeImage(value) {
  try {
    return require(`@/assets/img/hench/type/${value}.png`);
  } catch (e) {
    return false;
  }
}

const listOfTypes = [
  {
    name: "Dragon",
    value: 1
  },
  {
    name: "Démon",
    value: 2
  },
  {
    name: "Bête",
    value: 3
  },
  {
    name: "Oiseau",
    value: 4
  },
  {
    name: "Insecte",
    value: 5
  },
  {
    name: "Plante",
    value: 6
  },
  {
    name: "Mystère",
    value: 7
  },
  {
    name: "Métal",
    value: 8
  }
];

export { Type, listOfTypes, getTypeImage };
