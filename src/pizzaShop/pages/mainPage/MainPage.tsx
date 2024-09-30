import Header from "../../componets/header/Header.tsx";
import FilterButtons from "../../componets/filterButtons/FilterButtons.tsx";

import styles from "./mainPage.module.css";
import SortSelect from "../../componets/sortSelect/SortSelect.tsx";

function MainPage() {
  return (
    <div>
      <Header type="main" />
      <div className={styles.sortWrapper}>
        <FilterButtons />
        <SortSelect />
      </div>
    </div>
  );
}

export default MainPage;
