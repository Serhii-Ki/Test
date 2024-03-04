import CustomBtn from './CustomBtn';

import styles from './counter.module.css';

type PanelPropsType = {
	showMenu: () => void;
	increase: () => void;
	reset: () => void;
};

function PanelButton(props: PanelPropsType) {
	return (
		<div className={styles['btn-panel']}>
			<CustomBtn title='inc' onClick={props.increase} />
			<CustomBtn title='res' onClick={props.reset} />
			<CustomBtn title='menu' onClick={props.showMenu} />
		</div>
	);
}

export default PanelButton;
