import styles from './test.module.css';
import {useState} from "react";

function AppTest() {
	const options = ['Kiev', 'Doneck', 'Summy'];

	const [viewSelect, setViewSelect] = useState<boolean>(true);
	const [option, setOption] = useState<string>('city');

	return (
			<div className={styles.wrap}>
				<h1 className={styles.box} onClick={() => setViewSelect(prev => !prev)}>{option}</h1>
				{viewSelect &&
					<div className={styles['select-wrap']}>
						{options.map(el => {
							return (
									<p className={styles.option} onClick={() => {setOption(el); setViewSelect(false)}}>{el}</p>
							)
						})}
					</div>
				}
			</div>

	);
}


export default AppTest;
