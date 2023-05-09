import { HenchComplex } from "@/models/Utils/Components/HenchComplex.js";

function createHenchComplex(data) {
  return new HenchComplex(data?.hench, data?.henchLevel);
}

export { createHenchComplex };
