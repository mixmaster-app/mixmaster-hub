class HenchStats {
  hp;
  mp;
  attack;
  power;
  speed;
  accuracy;
  chance;

  constructor(data) {
    this.hp = data.hp;
    this.mp = data.mp;
    this.attack = data.attack;
    this.power = data.power;
    this.speed = data.speed;
    this.accuracy = data.accuracy;
    this.chance = data.chance;
  }
}

export default HenchStats;
