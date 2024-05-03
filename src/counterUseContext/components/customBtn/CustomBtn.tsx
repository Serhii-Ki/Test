import styles from './customBtn.module.css';

type BtnPropsType = {
  name: string;
  onClick: () => void;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function CustomBtn(props: BtnPropsType) {
  return (
      <button className={styles['btn']} onClick={props.onClick} disabled={props.disabled}>{props.name}</button>
  );
}

export default CustomBtn;