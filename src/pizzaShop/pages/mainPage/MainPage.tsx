import Header from "../../componets/header/Header.tsx";
import FilterButtons from "../../componets/filterButtons/FilterButtons.tsx";

import styles from "./mainPage.module.css";
import SortSelect from "../../componets/sortSelect/SortSelect.tsx";
import { useEffect } from "react";
import { useAppDispatch } from "../../store/store.ts";
import { pizzaThunk } from "../../store/pizza-slice.ts";
import Pizzas from "../../componets/pizzas/Pizzas.tsx";

function MainPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(pizzaThunk.getPizza());
  }, []);
  return (
    <div>
      <Header type="main" />
      <div className={styles.sortWrapper}>
        <FilterButtons />
        <SortSelect />
        <Pizzas />
      </div>
    </div>
  );
}

export default MainPage;
