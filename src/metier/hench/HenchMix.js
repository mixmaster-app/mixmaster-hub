import { Hench } from "@/metier/hench/Hench.js";
import Item from "@/metier/Item.js";

class HenchMix {
  id;
  henchResult;
  henchRight;
  henchLeft;
  itemRight;
  itemLeft;

  constructor(data) {
    this.id = data.id;
    this.henchResult = new Hench(data.henchResult);
    this.henchRight = new Hench(data.henchRight);
    this.henchLeft = new Hench(data.henchLeft);
    const itemTempLeft = data.itemLeft;
    this.itemLeft = new Item(
      itemTempLeft.id,
      itemTempLeft.libelle,
      itemTempLeft.description
    );
    const itemTempRight = data.itemRight;
    this.itemRight = new Item(
      itemTempRight.id,
      itemTempRight.libelle,
      itemTempRight.description
    );
  }
}

export default HenchMix;
