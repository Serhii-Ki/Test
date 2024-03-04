import cn from 'classnames';
import { useEffect, useState } from 'react';
import MenuPanel from './MenuPanel';
import PanelButton from './PanelButton';

import styles from './counter.module.css';

function TestCounter() {
	const [minValue, setMinValue] = useState<number>(0);
	const [maxValue, setValue] = useState<number>(5);
	const [count, setCount] = useState<number>(0);
	const [viewMenu, setViewMenu] = useState<boolean>(false);
	const [isCorrect, setIsCorrect] = useState<boolean>(true);

	useEffect(() => {
		setCount(minValue);
	}, [minValue]);

	useEffect(() => {
		count === maxValue && setIsCorrect(false);
	}, [count, maxValue]);

	const showMenu = () => {
		setViewMenu(true);
	};

	const closeMenu = () => {
		setViewMenu(false);
	};

	const increase = () => {
		if (count < maxValue) {
			setCount(prev => (prev += 1));
		} else {
			return;
		}
	};

	const reset = () => {
		setCount(0);
		setIsCorrect(true);
	};

	return (
		<div className={styles['counter-wrapper']}>
			<div
				className={cn(styles['count-style'], {
					[styles['error']]: !isCorrect,
				})}
			>
				{count}
			</div>
			<PanelButton showMenu={showMenu} increase={increase} reset={reset} />
			{viewMenu && <MenuPanel closeMenu={closeMenu} />}
		</div>
	);
}

export default TestCounter;
