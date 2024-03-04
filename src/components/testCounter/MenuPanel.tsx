import CustomBtn from './CustomBtn';
import CustomInput from './CustomInput';
import styles from './counter.module.css';

type MenuPropsType = {
	closeMenu: () => void;
};

function MenuPanel(props: MenuPropsType) {
	return (
		<div className={styles['menu-panel']}>
			<div className={styles['panel-input']}>
				<CustomInput />
				<div className={styles['input-text']}>max</div>
			</div>
			<div className={styles['panel-input']}>
				<CustomInput />
				<div className={styles['input-text']}>min</div>
			</div>
			<div className={styles['panel-input']}>
				<CustomBtn title='cancel' onClick={props.closeMenu} />
				<CustomBtn title='set' onClick={() => console.log('sd')} />
			</div>
		</div>
	);
}

export default MenuPanel;
