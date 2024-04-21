import styles from './customInput.module.css';
import cn from 'classnames';

type InputPropsType = {
  label: string;
  value: string;
  isError?: boolean;
  onChange: (value: string) => void;
}
function CustomInput(props: InputPropsType) {
  return (
      <label className={styles['label']}>
        {props.label}
        <input
            className={cn(styles['input'], {
              [styles['error']]: props.isError
            })}
            type='number'
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
        />
      </label>
  );
}

export default CustomInput;