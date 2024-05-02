import styles from './customBtn.module.css';

type BtnPropsType = {
  name: string;
  onClick: () => void;
}

function CustomBtn(props: BtnPropsType) {
  return (
      <button className={styles['btn']} onClick={props.onClick}>{props.name}</button>
  );
}

export default CustomBtn;