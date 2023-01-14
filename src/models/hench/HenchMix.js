import { Hench } from "@/models/hench/Hench.js";
import Item from "@/models/Item.js";

class HenchMix {
  id;
  hench_result;
  hench_right;
  hench_left;
  item_right;
  item_left;

  constructor(data) {
    this.id = data.id;
    this.hench_result = new Hench(data.hench_result);
    this.hench_right = new Hench(data.hench_right);
    this.hench_left = new Hench(data.hench_left);
    this.item_left = new Item(
      data.item_left?.id,
      data.item_left?.name,
      data.item_left?.description
    );
    this.item_right = new Item(
      data.item_right?.id,
      data.item_right?.name,
      data.item_right?.description
    );
  }
}

export default HenchMix;
