import { useSelector } from "react-redux";
import { selectedPizza } from "../../store/pizza-slice.ts";
import PizzaCard from "../pizzaCard/PizzaCard.tsx";

function Pizzas() {
  const pizzas = useSelector(selectedPizza);
  return (
    <div>
      {pizzas.map((pizza) => (
        <PizzaCard img={pizza.imageUrl} />
      ))}
    </div>
  );
}

export default Pizzas;
