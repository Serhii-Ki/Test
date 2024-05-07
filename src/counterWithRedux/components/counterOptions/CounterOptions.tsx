import styles from './counterOptions.module.css';
import CustomInput from "../customInput/CustomInput.tsx";
import CustomBtn from "../customBtn/CustomBtn.tsx";
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store.ts";
import {StateType} from "../../store/reducer.ts";
import Stack from "@mui/material/Stack";
import {setMinAC} from "../../store/actions.ts";

type CounterOptionsTypeProps = {
  toggleOptions: () => void
}

function CounterOptions(props: CounterOptionsTypeProps) {
  const state = useSelector<AppRootStateType, StateType>(state => state.counter)
  const maxVal = state.max ? String(state.max) : ''
  const [minValue, setMinValue] = useState<string>('');
  const [maxValue, setMaxValue] = useState<string>('');
  const dispatch = useDispatch()

  const  onChangeMinValue = (value: string) => {
    setMinValue(value);
  }
  const  onChangeMaxValue = (value: string) => {
    setMaxValue(value);
  }

  const setMin = () => {
    if(!state.max || Number(minValue) < state.max) {
      dispatch(setMinAC(Number(minValue)))
      setMinValue('')
    }
  }

  return (
      <div className={styles['counterOptions']}>
        <CloseIcon className={styles['iconClose']} onClick={props.toggleOptions}/>
        <CustomInput label={'min'} placeholder={String(state.min)} value={minValue} onChange={onChangeMinValue}/>
        <CustomInput label={'max'} placeholder={maxVal} value={maxValue} onChange={onChangeMaxValue}/>
        <Stack direction="row" spacing={3}>
          <CustomBtn name={'setMin'} onClick={setMin}/>
          <CustomBtn name={'setMax'} onClick={() => {}}/>
        </Stack>
      </div>
  );
}

export default CounterOptions;