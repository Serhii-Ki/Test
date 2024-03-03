import { useState } from 'react';
import styles from './counter.module.css';

function TestCounter() {
	const [count, setCount] = useState<number>(0);
	return (
		<div className={styles['counter-wrapper']}>
			<div className={styles['count-style']}>{count}</div>
		</div>
	);
}

export default TestCounter;
