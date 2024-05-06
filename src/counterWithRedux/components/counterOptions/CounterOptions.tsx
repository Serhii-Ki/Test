import styles from './counterOptions.module.css';
import CustomInput from "../customInput/CustomInput.tsx";
import CustomBtn from "../customBtn/CustomBtn.tsx";
import CloseIcon from '@mui/icons-material/Close';

type CounterOptionsTypeProps = {
  toggleOptions: () => void
}

function CounterOptions(props: CounterOptionsTypeProps) {
  return (
      <div className={styles['counterOptions']}>
        <CloseIcon className={styles['iconClose']} onClick={props.toggleOptions}/>
        <CustomInput label={'min'} value={0} onChange={() => {}}/>
        <CustomInput label={'max'} value={12} onChange={() => {}}/>
        <CustomBtn name={'set'} onClick={() => {}}/>
      </div>
  );
}

export default CounterOptions;