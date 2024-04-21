import styles from './counter.module.css';

function CustomInput() {
	return <input className={styles['input']} type='number' />;
}

export default CustomInput;
