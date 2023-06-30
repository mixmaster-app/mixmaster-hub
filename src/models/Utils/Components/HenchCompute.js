class HenchCompute {
  uniqueId;
  henchLeft;
  henchRight;

  constructor(henchLeft, henchRight) {
    this.uniqueId = `${this.henchLeft?.id}.${
      this.henchRight?.id
    }.${Math.random()}`;
    this.henchLeft = henchLeft;
    this.henchRight = henchRight;
  }
}

export { HenchCompute };
