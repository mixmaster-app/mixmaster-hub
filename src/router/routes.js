const ROUTE_LIST = [
  {
    name: "Home",
    path: "/",
    description: "Home",
    iconName: "mdi-home",
    imageName: undefined,
    doDspInSidebar: false,
    doDspInFunctionnality: false
  },
  {
    name: "Fonctionnalités",
    path: "/functionnalities",
    description: "Fonctionnalités",
    iconName: "mdi-dots-grid",
    imageName: undefined,
    doDspInSidebar: false,
    doDspInFunctionnality: false
  },
  {
    name: "Recherche de Henchs",
    path: "/henchs-search",
    description: "Recherche de Henchs",
    iconName: "mdi-google-downasaur",
    imageName: "03_henchlist",
    doDspInSidebar: true,
    doDspInFunctionnality: true
  },
  {
    name: "Arbre de mix",
    path: "/mix-tree",
    description: "Arbre de mix",
    iconName: "mdi-family-tree",
    imageName: "02_mixtreeview",
    doDspInSidebar: true,
    doDspInFunctionnality: true
  },
  {
    name: "Résultat Lv. de mix",
    path: "/mix-lvl-result",
    description: "Résultat Lv. de mix",
    iconName: "mdi-calculator-variant-outline",
    imageName: "01_mixlevelresult",
    doDspInSidebar: true,
    doDspInFunctionnality: true
  },
  {
    name: "Paramètres",
    path: "/settings",
    description: "Paramètres",
    iconName: "mdi-cog-outline",
    imageName: undefined,
    doDspInSidebar: false,
    doDspInFunctionnality: false
  }
];

export default ROUTE_LIST;
