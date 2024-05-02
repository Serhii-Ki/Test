import styles from './counterDisplay.module.css';
import CounterMain from "../counterMain/CounterMain.tsx";
import CounterOptions from "../counterOptions/CounterOptions.tsx";
import {useState} from "react";

function CounterDisplay() {
  const [isOptions, setIsOptions] = useState<boolean>(false);

  const openOptions = () => {
    setIsOptions(true);
  }

  const closeOptions = () => {
    setIsOptions(false);
  }
  return (
      <div className={styles['counterWrapper']}>
        <h1 className={styles['title']}>My counter</h1>
        <div className={styles['mainDisplay']}>
          <CounterMain openOptions={openOptions} />
          {isOptions && <CounterOptions closeOptions={closeOptions}/>}
        </div>
      </div>
  );
}

export default CounterDisplay;