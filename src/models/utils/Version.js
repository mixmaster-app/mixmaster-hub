class Version {
  version;
  icon;
  date;
  changes;

  constructor(version, icon, date) {
    this.version = version;
    this.icon = icon;
    this.date = date;
    this.changes = new Map();
  }

  addChanges(category, text) {
    if (this.changes.has(category)) {
      this.changes.get(category)?.push(...text);
    } else {
      this.changes.set(category, text);
    }
    return this;
  }
}

export { Version };
