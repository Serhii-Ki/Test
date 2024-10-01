import Header from "../../componets/header/Header.tsx";
import FilterButtons from "../../componets/filterButtons/FilterButtons.tsx";

import styles from "./mainPage.module.css";
import SortSelect from "../../componets/sortSelect/SortSelect.tsx";
import { useEffect } from "react";
import { useAppDispatch } from "../../store/store.ts";
import { pizzaThunk, selectedPizza } from "../../store/pizza-slice.ts";
import { useSelector } from "react-redux";

function MainPage() {
  const dispatch = useAppDispatch();
  const pizzas = useSelector(selectedPizza);

  console.log(pizzas);

  useEffect(() => {
    dispatch(pizzaThunk.getPizza());
  }, []);
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
