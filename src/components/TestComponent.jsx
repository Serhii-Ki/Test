const list = [
	{ value: 'ser3', order: 3, expired: false },
	{ value: 'ser4', order: 4, expired: false },
	{ value: 'ser1', order: 1, expired: true },
	{ value: 'ser2', order: 2, expired: false },
];
function TestComponent() {
	const res = list
		.filter(item => !item.expired)
		.sort((a, b) => a.order - b.order)
		.map(item => {
			return Array.from(item.value).reverse();
		})
		.flat();

	const res1 = Array.from(new Set(res)).join(' ');

	console.log(res1);
	return (
		<div>
			{res.map(item => (
				<div>{item}</div>
			))}
		</div>
	);
}

export default TestComponent;
