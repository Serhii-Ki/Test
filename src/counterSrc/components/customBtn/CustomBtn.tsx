import styles from './customBtn.module.css';

type BtnPropsType = {
  title: string;
  onClick: () => void;
}

function CustomBtn(props: BtnPropsType) {
  return (
      <button onClick={props.onClick} className={styles['btn']}>{props.title}</button>
  );
}

export default CustomBtn;