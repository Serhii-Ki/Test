import styles from './customInput.module.css';

type InputPropsType = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CustomInput(props: InputPropsType) {
  return (
      <label className={styles['label']}>
        {props.label}
        <input className={styles['input']} type='number' value={props.value} onChange={props.onChange}/>
      </label>
  );
}

export default CustomInput;