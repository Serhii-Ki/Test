import { useState, useEffect, useRef } from "react";
import styles from "./sortSelect.module.css";
import arrowUp from "../../../assets/arrowUp.svg";

type SelectValueType = "популярности" | "алфавиту" | "цене";

function SortSelect() {
  const [selectValue, setSelectValue] =
    useState<SelectValueType>("популярности");
  const [isFieldOpen, setFieldOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const toggleField = () => {
    setFieldOpen((prev) => !prev);
  };

  const handleSelectChange = (
    value: SelectValueType,
    event: React.MouseEvent,
  ) => {
    event.stopPropagation();
    setSelectValue(value);
    setFieldOpen(false);
  };

  const options: SelectValueType[] = ["популярности", "цене", "алфавиту"];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setFieldOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.select} ref={selectRef} onClick={toggleField}>
      <img src={arrowUp} alt="arrow" />
      <p className={styles.title}>
        Сортировать по:<span className={styles.value}> {selectValue}</span>
      </p>
      {isFieldOpen && (
        <div className={styles.field}>
          <ul className={styles.list}>
            {options.map((option) => (
              <li
                key={option}
                className={styles.item}
                onClick={(e) => handleSelectChange(option, e)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SortSelect;
