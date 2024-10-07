import { useSelector } from "react-redux";
import { selectedPizza } from "../../store/pizza-slice.ts";
import PizzaCard from "../pizzaCard/PizzaCard.tsx";

import styles from "./pizzas.module.css";

function Pizzas() {
  const pizzas = useSelector(selectedPizza);
  return (
    <div className={styles.pizzasWrapper}>
      {pizzas.map((pizza) => (
        <PizzaCard
          key={pizza.id}
          id={pizza.id}
          title={pizza.title}
          img={pizza.imageUrl}
          sizes={pizza.sizes}
        />
      ))}
    </div>
  );
}

export default Pizzas;
