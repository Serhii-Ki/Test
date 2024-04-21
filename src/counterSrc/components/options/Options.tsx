import styles from './options.module.css';
import CustomInput from "../custonInput/CustomInput.tsx";
import CustomBtn from "../customBtn/CustomBtn.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../store/store.ts";
import {counterStateType} from "../../store/counter-reducer.ts";
import {changeMaxAC, changeMinAC, setMax, setMin} from "../../store/actions.ts";

function Options() {
  const dispatch = useDispatch();
  const counter = useSelector<RootStateType, counterStateType>(state => state.counter);

  const onChangeMin = (value: string) => {
    dispatch(changeMinAC(value))
  }

  const onChangeMax = (value: string) => {
    dispatch(changeMaxAC(value));
  }

  const onSetMin = () => {
    dispatch(setMin());
    dispatch(setMax())
  }

  return (
      <div className={styles['options-display']}>
        <div className={styles['input-wrapper']}>
          <CustomInput label={'set min'} value={counter.inputMin} onChange={onChangeMin}/>
          <CustomInput label={'set max'} value={counter.inputMax} onChange={onChangeMax}/>
        </div>
        <div className={styles['btn-wrapper']}>
          <CustomBtn title={'close'} onClick={() => {}}/>
          <CustomBtn title={'confirm'} onClick={onSetMin}/>
        </div>
      </div>
  );
}

export default Options;