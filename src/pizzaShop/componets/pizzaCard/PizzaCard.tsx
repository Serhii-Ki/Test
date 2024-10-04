import styles from "./pizzaCard.module.css";
import Button from "../button/Button.tsx";

function PizzaCard() {
  return (
    <div className={styles.cardWrapper}>
      <img src="" alt="pizza" className={styles.img} />
      <h3 className={styles.title}>Мясная пицца</h3>
      <div className={styles.optins}>
        <div className={styles.topOptions}>
          <span>тонкое</span>
          <span>традиционное</span>
        </div>
        <div className={styles.downOptions}>
          <span>26см</span>
          <span>30см</span>
          <span>40см</span>
        </div>
      </div>
      <div className={styles.info}>
        <span className={styles.infoPrice}>40$</span>
        <Button title="Добавить" type="main" />
      </div>
    </div>
  );
}

export default PizzaCard;
