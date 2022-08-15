const ROUTE_LIST = [
  {
    name: "Home",
    path: "/",
    description: "Home page",
    iconName: "mdi-home",
    imageName: undefined,
    doDspInSidebar: true,
    doDspInFunctionnality: false
  },
  {
    name: "Functionnality",
    path: "/functionnality",
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
    doDspInSidebar: false,
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
    name: "Mix Tree view",
    path: "mixtreeview",
    description: "Créer l'arbre de mix d'un hench",
    iconName: "mdi-file-tree",
    imageName: "02_mixtreeview",
    doDspInSidebar: true,
    doDspInFunctionnality: true
  },
  {
    name: "Calendar",
    path: "/calendar",
    description: "Calendar of events",
    iconName: "mdi-calendar",
    imageName: "04_calendar",
    doDspInSidebar: false,
    doDspInFunctionnality: false
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
    path: "/functionnality/mixlvlresult",
    description: "Calcul le level du résultat d'un mix",
    iconName: undefined,
    imageName: "01_mixlevelresult",
    doDspInSidebar: false,
    doDspInFunctionnality: true
  },
];

export default ROUTE_LIST;
