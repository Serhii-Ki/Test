import { AiFillSetting } from "react-icons/ai";
import styles from './counterMain.module.css';
import CustomBtn from "../customBtn/CustomBtn.tsx";
import {Dispatch, useContext, useEffect, useState} from "react";
import {counterContext} from "../../state/counterContext.ts";
import {initialStateType} from "../../state/counterReducer.ts";
import {ActionsType, decrAC, incrAC, resetAC, setCountAC} from "../../state/actions.ts";


type MainCounterPropsType = {
  openOptions: () => void;
}

export type ContextType = {
  counter: initialStateType;
  dispatch: Dispatch<ActionsType>
}

function CounterMain(props: MainCounterPropsType) {
  const {counter, dispatch}: ContextType = useContext(counterContext);

  const [isDisabledMax, setIsDisabledMax] = useState<boolean>(false)
  const [isDisabledMin, setIsDisabledMin] = useState<boolean>(false)

  useEffect(() => {
    if(counter.count !== counter.min){
      dispatch(setCountAC(counter.min))
    }
  }, [counter.min]);

  useEffect(() => {
    if(counter.max && counter.max === counter.count) {
      setIsDisabledMax(true);
    } else {
      setIsDisabledMax(false);
    }

    if(counter.min === counter.count) {
      setIsDisabledMin(true);
    } else {
      setIsDisabledMin(false);
    }
  }, [counter.min, counter.max, counter.count])

  const incrementCount = () => {
    dispatch(incrAC());
  }

  const decrementCount = () => {
    dispatch(decrAC())
  }

  const resetCount = () => {
    dispatch(resetAC())
  }
  return (
      <div className={styles['counter']}>
        <div className={styles['minMax']}>
          <p>min: {counter.min}</p>
          <p>max: {counter.max || '∞'}</p>
        </div>
        <div className={styles['count']}>
          {counter.count}
        </div>
        <div className={styles['btnWrapper']}>
          <CustomBtn disabled={isDisabledMax} name={'INC'} onClick={incrementCount}/>
          <CustomBtn disabled={isDisabledMin} name={'DEC'} onClick={decrementCount}/>
        </div>
        <div className={styles['options']} onClick={props.openOptions}>
          <AiFillSetting className={styles['icon']} size='40px'/>
        </div>
        <div>
          <CustomBtn name={'reset'} onClick={resetCount}/>
        </div>
      </div>
  );
}

export default CounterMain;