import styles from './customInput.module.css';

type InputPropsType = {
  label: string;
  value: string;
  onChange: (value: string) => void;
}
function CustomInput(props: InputPropsType) {
  return (
      <label className={styles['label']}>
        {props.label}
        <input
            className={styles['input']}
            type='number'
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
        />
      </label>
  );
}

export default CustomInput;