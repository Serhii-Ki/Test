import { AiFillSetting } from "react-icons/ai";
import styles from './counterMain.module.css';
import CustomBtn from "../customBtn/CustomBtn.tsx";

type MainCounterPropsType = {
  openOptions: () => void;
}

function CounterMain(props: MainCounterPropsType) {
  return (
      <div className={styles['counter']}>
        <div className={styles['minMax']}>
          <p>min: 0</p>
          <p>max: &infin;</p>
        </div>
        <div className={styles['count']}>
          0
        </div>
        <div className={styles['btnWrapper']}>
          <CustomBtn name={'INC'} onClick={() => {}}/>
          <CustomBtn name={'DEC'} onClick={() => {}}/>
        </div>
        <div className={styles['options']} onClick={props.openOptions}>
          <AiFillSetting className={styles['icon']} size='40px'/>
        </div>
        <div>
          <CustomBtn name={'reset'} onClick={() => {}}/>
        </div>
      </div>
  );
}

export default CounterMain;