import styles from "./pizzaCard.module.css";
import Button from "../button/Button.tsx";
import cn from "classnames";
import { useState } from "react";

type Props = {
  id: number;
  title: string;
  img: string;
  sizes: number[];
};

function PizzaCard(props: Props) {
  const [thickness, setThickness] = useState<number>(0);
  const [size, setSize] = useState<number>(props.sizes[0]);

  const handleThicknessChange = (index: number) => {
    setThickness(index);
  };

  const handleSizeChange = (size: number) => {
    setSize(size);
  };
  return (
    <div className={styles.cardWrapper}>
      <img src={props.img} alt="pizza" className={styles.img} />
      <h3 className={styles.title}>{props.title}</h3>
      <div className={styles.options}>
        <div className={styles.topOptions}>
          <span
            onClick={() => handleThicknessChange(0)}
            className={cn(styles.optionItem, {
              [styles.optionItemActive]: thickness === 0,
            })}
          >
            тонкое
          </span>
          <span
            onClick={() => handleThicknessChange(1)}
            className={cn(styles.optionItem, {
              [styles.optionItemActive]: thickness === 1,
            })}
          >
            традиционное
          </span>
        </div>
        <div className={styles.downOptions}>
          {props.sizes.map((sizePizza, i) => {
            return (
              <span
                key={i}
                className={cn(styles.optionItem, {
                  [styles.optionItemActive]: sizePizza === size,
                })}
                onClick={() => handleSizeChange(sizePizza)}
              >
                {sizePizza}см
              </span>
            );
          })}
        </div>
      </div>
      <div className={styles.info}>
        <span className={styles.infoPrice}>от 40 $</span>
        <Button title="Добавить" type="main" />
      </div>
    </div>
  );
}

export default PizzaCard;
