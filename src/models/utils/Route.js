class Route {
  path;
  name;
  component;
  alias;
  category;
  icon;
  image;
  isDisplayedInSidebar;
  isDisplayedInFunctionnality;
  routeCategory;

  constructor(path, component) {
    this.path = path;
    this.name = "";
    this.component = component;
    this.alias = [];
    this.icon = "mdi-information-off-outline";
    this.image = "default";
    this.isDisplayedInSidebar = true;
    this.isDisplayedInFunctionnality = true;
    this.category = RouteCategory.Middle;
  }

  setIcon(icon) {
    this.icon = icon;
    return this;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setImage(imageName) {
    this.image = imageName;
    return this;
  }

  enableDisplayInSidebar() {
    this.isDisplayedInSidebar = true;
    return this;
  }

  disableDisplayInSidebar() {
    this.isDisplayedInSidebar = false;
    return this;
  }

  enableDisplayInFunctionnality() {
    this.isDisplayedInFunctionnality = true;
    return this;
  }

  disableDisplayInFunctionnality() {
    this.isDisplayedInFunctionnality = false;
    return this;
  }

  setRouteCategory(category) {
    this.category = category;
    return this;
  }

  addAliases(aliases) {
    for (let alias of aliases) {
      this.addAlias(alias);
    }
    return this;
  }

  addAlias(alias) {
    this.alias.push(alias);
    return this;
  }
}

const RouteCategory = {
  Top: "Top",
  Middle: "Middle",
  Bottom: "Bottom"
};

export { Route, RouteCategory };
