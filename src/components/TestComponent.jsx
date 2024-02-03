import { useState } from 'react';

const list = [
	{ id: 1, banknotes: 'dollars', value: 100 },
	{ id: 2, banknotes: 'dollars', value: 130 },
	{ id: 3, banknotes: 'zloty', value: 1100 },
	{ id: 4, banknotes: 'zloty', value: 321 },
	{ id: 5, banknotes: 'dollars', value: 453 },
	{ id: 6, banknotes: 'zloty', value: 1531 },
	{ id: 7, banknotes: 'zloty', value: 422 },
];
function TestComponent() {
	const [banknotes, setBanknotes] = useState('all');

	const onChangeFilter = filter => {
		setBanknotes(filter);
	};

	const renderElem = () => {
		if (banknotes === 'dollars') {
			return list.filter(item => item.banknotes === 'dollars');
		}
		if (banknotes === 'zloty') {
			return list.filter(item => item.banknotes === 'zloty');
		}
		return list;
	};

	return (
		<div>
			<button onClick={() => onChangeFilter('all')}>All</button>
			<button onClick={() => onChangeFilter('dollars')}>dollars</button>
			<button onClick={() => onChangeFilter('zloty')}>zloty</button>
			<ul>
				{renderElem().map(item => (
					<li>
						{item.value} {item.banknotes}
					</li>
				))}
			</ul>
		</div>
	);
}

export default TestComponent;
