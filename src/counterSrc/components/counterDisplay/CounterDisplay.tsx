import styles from './counerDisplay.module.css';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../store/store.ts";
import {counterStateType} from "../../store/counter-reducer.ts";
import CustomBtn from "../customBtn/CustomBtn.tsx";
import {decrementAC, incrementAC, resetAC} from "../../store/actions.ts";
import Options from "../options/Options.tsx";

function CounterDisplay() {
  const dispatch = useDispatch();
  const counter = useSelector<RootStateType, counterStateType>(state => state.counter);

  const handleIncrement = () => {
    dispatch(incrementAC());
  };

  const handleDecrement = () => {
    dispatch(decrementAC());
  };

  return (
      <div className={styles['counter-wrapper']}>
        <h1 className={styles['title']}>My Counter</h1>
        <div className={styles['counter-display']}>
          <div className={styles['min-max']}>
            <div className={styles['min']}>min: {counter.min || '0'}</div>
            <div className={styles['max']}>max: {counter.max || '\u221e'}</div>
          </div>
          <h2 className={styles['counter']}>{counter.count}</h2>
          <div className={styles['btn-wrapper']}>
            <CustomBtn title={'dec'} onClick={handleDecrement}/>
            <CustomBtn title={'inc'} onClick={handleIncrement}/>
          </div>
          <div className={styles['btn-wrapper']}>
            <CustomBtn title={'reset'} onClick={() => dispatch(resetAC())}/>
          </div>
        </div>
        <div className={styles['btm-options']}>
          <CustomBtn title={'options'} onClick={() => {
          }}/>
        </div>
        <Options/>
      </div>
  );
}

export default CounterDisplay;