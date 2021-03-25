const ROUTE_LIST = [
  {
    name: "Functionnality",
    path: "/",
    description: "List of fonctionnality",
    iconName: "mdi-dots-grid",
    imageName: undefined,
    doDspInSidebar: true,
    doDspInFunctionnality: false
  },
  {
    name: "Profile",
    path: "/profile",
    description: "User profile",
    iconName: "mdi-account",
    imageName: undefined,
    doDspInSidebar: true,
    doDspInFunctionnality: false
  },
  {
    name: "Henchs list",
    path: "/henchs",
    description: "Search informations about a hench",
    iconName: "mdi-google-downasaur",
    imageName: "03_henchlist",
    doDspInSidebar: true,
    doDspInFunctionnality: true
  },
  {
    name: "Calendar",
    path: "/calendar",
    description: "Calendar of events",
    iconName: "mdi-calendar",
    imageName: "04_calendar",
    doDspInSidebar: true,
    doDspInFunctionnality: true
  },
  {
    name: "Settings",
    path: "/settings",
    description: "Paramètres",
    iconName: "mdi-cog",
    imageName: undefined,
    doDspInSidebar: true,
    doDspInFunctionnality: false
  },
  {
    name: "Mix Level result",
    path: "/Functionnality/mixlvlresult",
    description: "Calcul le level du résultat d'un mix",
    iconName: undefined,
    imageName: "01_mixlevelresult",
    doDspInSidebar: false,
    doDspInFunctionnality: true
  },
  {
    name: "Mix Tree view",
    path: "/Functionnality/mixtreeview",
    description: "Créer l'arbre de mix d'un hench",
    iconName: "mid-tree",
    imageName: "02_mixtreeview",
    doDspInSidebar: false,
    doDspInFunctionnality: true
  }
];

export default ROUTE_LIST;
