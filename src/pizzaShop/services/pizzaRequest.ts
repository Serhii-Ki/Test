import { instance } from "./instance.ts";

export function pizzaRequest() {
  const getPizza = () => {
    return instance.get("");
  };

  return { getPizza };
}
