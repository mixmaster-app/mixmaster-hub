import { HenchComplex } from "@/models/Utils/Components/HenchComplex.js";

function createHenchComplex(data) {
  return data ?? new HenchComplex(null, 0);
}

export { createHenchComplex };
