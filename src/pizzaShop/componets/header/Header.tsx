import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div>
        <p>logo</p>
        <p>Самая вкусная пицца</p>
      </div>
      <div className={styles.button}>
        <span>500$</span>
        <span></span>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
