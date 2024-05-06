import Stack from '@mui/material/Stack';
import styles from './counterDisplay.module.css';
import CustomBtn from "../customBtn/CustomBtn.tsx";
import SettingsIcon from '@mui/icons-material/Settings';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store.ts";
import {StateType} from "../../store/reducer.ts";

type CounterDisplayTypeProps = {
  toggleOptions: () => void
}

function CounterDisplay(props: CounterDisplayTypeProps) {
  const state = useSelector<AppRootStateType, StateType>(state => state.counter)
  return (
      <div className={styles['counterDisplay']}>
        <div className={styles['minMax']}>
          <span>min: {state.min}</span>
          <span>max: {state.max || '∞'}</span>
        </div>
        <div className={styles['count']}>
          0
        </div>
        <Stack direction="row" spacing={3} mt={'40px'}>
          <CustomBtn name={'DEC'} onClick={() => {}}/>
          <CustomBtn name={'INC'} onClick={() => {}}/>
        </Stack>
        <Stack direction="row" spacing={3} mt={'20px'}>
          <CustomBtn name={'Reset'} onClick={() => {}}/>
        </Stack>
        <SettingsIcon className={styles['icon']} onClick={props.toggleOptions}/>
      </div>
  );
}

export default CounterDisplay;