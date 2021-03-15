class HenchStats {
  hp;
  mp;
  attaque;
  puissance;
  vitesse;
  precision;
  chance;

  constructor(data) {
    this.hp = data.hp;
    this.mp = data.mp;
    this.attaque = data.attaque;
    this.puissance = data.puissance;
    this.vitesse = data.vitesse;
    this.precision = data.precision;
    this.chance = data.chance;
  }
}

export default HenchStats;
