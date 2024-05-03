import { IoCloseSharp } from "react-icons/io5";
import styles from './counterOptions.module.css';
import CustomInput from "../customInput/CustomInput.tsx";
import CustomBtn from "../customBtn/CustomBtn.tsx";
import { useContext, useState} from "react";
import { setMaxAC, setMinAC} from "../../state/actions.ts";
import {counterContext} from "../../state/counterContext.ts";
import {ContextType} from "../counterMain/CounterMain.tsx";

type OptionsPropsType = {
  closeOptions: () => void;
}

function CounterOptions(props: OptionsPropsType) {
  const {counter, dispatch}: ContextType = useContext(counterContext);

  const [min, setMin] = useState<number>(counter.min)
  const [max, setMax] = useState<number | null>(counter.max)

  const setMinMax = () => {

    console.log(max)
    if(max) {
      dispatch(setMaxAC(Number(max)))
    }
    if(min) {
      dispatch(setMinAC(Number(min)))
    }
  }

  const onChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMin(Number(e.target.value))
  }
  const onChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMax(Number(e.target.value))
  }

  return (
      <div className={styles['optionsWrapper']}>
        <IoCloseSharp className={styles['icon']} size='30px' onClick={props.closeOptions}/>
        <CustomInput label={'max'} value={String(max)} onChange={onChangeMax}/>
        <CustomInput label={'min'} value={String(min)} onChange={onChangeMin}/>
        <div className={styles['btnWrapper']}>
          <CustomBtn name={'set'} onClick={setMinMax}/>
          <CustomBtn name={'cancel'} onClick={() => {}}/>
        </div>
      </div>
  );
}

export default CounterOptions;