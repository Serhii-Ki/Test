import styles from './test.module.css';
import {useState} from "react";

function AppTest() {
	const options = ['Kiev', 'Doneck', 'Summy'];

	const [viewSelect, setViewSelect] = useState<boolean>(false);
	const [option, setOption] = useState<string>('city');

	const closeSelect = (e: React.MouseEvent<HTMLDivElement>) => {
		if(!(e.target as HTMLInputElement).classList.contains(styles.box)){
			setViewSelect(false);
		}
	}

	return (
			<>
				<div className={styles.parent} onClick={closeSelect}></div>
					<div className={styles.wrap}>
						<h1 className={styles.box} onClick={() => setViewSelect(prev => !prev)}>{option}</h1>
						{viewSelect &&
								<div className={styles['select-wrap']}>
									{options.map(el => {
										return (
												<p key={el} className={styles.option} onClick={() => {
													setOption(el);
													setViewSelect(false)
												}}>{el}</p>
										)
									})}
								</div>
						}
					</div>
			</>


	);
}


export default AppTest;
