import Button from "../button/Button.tsx";

import styles from "./filterButtons.module.css";

function FilterButtons() {
  return (
    <div className={styles.btnWrapper}>
      <Button title="ВСЕ" type="filter" isActive={true} />
      <Button title="МЯСНЫЕ" type="filter" />
      <Button title="ВЕГАТЕРИАНСКИЕ" type="filter" />
      <Button title="ГРИЛЬ" type="filter" />
      <Button title="ОСТРЫЕ" type="filter" />
      <Button title="ЗАКРЫТЫЕ" type="filter" />
    </div>
  );
}

export default FilterButtons;
