class EventType {
  id;
  libelle;
  color;

  constructor(data) {
    this.id = data.id || 0;
    this.libelle = data.libelle || "";
    this.color = data.color || "000000";
  }
}

class Event {
  id;
  libelle;
  start;
  start_heure;
  end;
  end_heure;
  event_type;

  constructor(data) {
    this.id = data.id || 0;
    this.libelle = data.libelle || "";
    this.start = data.start || undefined;
    this.start_heure = data.start_heure || undefined;
    this.end = data.end || undefined;
    this.end_heure = data.end_heure || undefined;
    this.event_type = new EventType(data.event_type) || undefined;
  }
}

export { Event };
