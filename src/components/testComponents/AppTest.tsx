import { useState } from 'react';
import Stars from './Stars';

function AppTest() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Stars count={count} setCount={setCount} />
		</div>
	);
}

export default AppTest;
