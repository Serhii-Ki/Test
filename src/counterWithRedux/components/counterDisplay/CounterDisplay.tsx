import Stack from '@mui/material/Stack';
import styles from './counterDisplay.module.css';
import CustomBtn from "../customBtn/CustomBtn.tsx";
import SettingsIcon from '@mui/icons-material/Settings';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store.ts";
import {StateType} from "../../store/reducer.ts";
import {decrAC, incAC, resetAC, setCountAC} from "../../store/actions.ts";
import {useEffect, useState} from "react";

type CounterDisplayTypeProps = {
  toggleOptions: () => void
}

function CounterDisplay(props: CounterDisplayTypeProps) {
  const state = useSelector<AppRootStateType, StateType>(state => state.counter);
  const dispatch = useDispatch();

  const [isMinDisable, setMinDisable] = useState<boolean>(false);
  const [isMaxDisable, setMaxDisable] = useState<boolean>(false);

  useEffect(() => {
    if(state.min === state.count){
      setMinDisable(true)
    } else {
      setMinDisable(false)
    }

    if(state.max === state.count){
      setMaxDisable(true)
    } else {
      setMaxDisable(false)
    }
  }, [state.min, state.max, state.count]);

  useEffect(() => {
    if(state.min !== state.count){
      dispatch(setCountAC(state.min))
    }
  }, [state.min]);

  const incrementCount = () => {
    dispatch(incAC())
  }

  const decrementCount = () => {
    dispatch(decrAC())
  }

  const resetCount = () => {
    dispatch(resetAC())
  }

  return (
      <div className={styles['counterDisplay']}>
        <div className={styles['minMax']}>
          <span>min: {state.min}</span>
          <span>max: {state.max || '∞'}</span>
        </div>
        <div className={styles['count']}>
          {state.count}
        </div>
        <Stack direction="row" spacing={3} mt={'40px'}>
          <CustomBtn disabled={isMinDisable} name={'DEC'} onClick={decrementCount}/>
          <CustomBtn disabled={isMaxDisable} name={'INC'} onClick={incrementCount}/>
        </Stack>
        <Stack direction="row" spacing={3} mt={'20px'}>
          <CustomBtn name={'Reset'} onClick={resetCount}/>
        </Stack>
        <SettingsIcon className={styles['icon']} onClick={props.toggleOptions}/>
      </div>
  );
}

export default CounterDisplay;