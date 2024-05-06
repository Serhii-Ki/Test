import styles from './mainDisplay.module.css';
import CounterDisplay from "../counterDisplay/CounterDisplay.tsx";
import CounterOptions from "../counterOptions/CounterOptions.tsx";
import {useState} from "react";

function MainDisplay() {
  const [isOptions, setIsOptions] = useState<boolean>(false);
  const toggleOptions = () => {
    setIsOptions(prev => !prev)
  }
  return (
      <div className={styles['displayWrapper']}>
        <CounterDisplay toggleOptions={toggleOptions}/>
        {isOptions && <CounterOptions toggleOptions={toggleOptions}/>}
      </div>
  );
}

export default MainDisplay;