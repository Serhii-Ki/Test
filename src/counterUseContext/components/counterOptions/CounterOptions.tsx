import { IoCloseSharp } from "react-icons/io5";
import styles from './counterOptions.module.css';
import CustomInput from "../customInput/CustomInput.tsx";
import CustomBtn from "../customBtn/CustomBtn.tsx";

type OptionsPropsType = {
  closeOptions: () => void;
}

function CounterOptions(props: OptionsPropsType) {
  return (
      <div className={styles['optionsWrapper']}>
        <IoCloseSharp className={styles['icon']} size='30px' onClick={props.closeOptions}/>
        <CustomInput label={'max'} value={'5'} onChange={() => {}}/>
        <CustomInput label={'min'} value={'1'} onChange={() => {}}/>
        <div className={styles['btnWrapper']}>
          <CustomBtn name={'set'} onClick={() => {}}/>
          <CustomBtn name={'cancel'} onClick={() => {}}/>
        </div>
      </div>
  );
}

export default CounterOptions;