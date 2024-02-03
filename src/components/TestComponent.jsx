const list = [
	{ id: 1, parent: null },
	{ id: 2, parent: 1 },
	{ id: 3, parent: null },
	{ id: 4, parent: 2 },
	{ id: 5, parent: 3 },
	{ id: 6, parent: 5 },
	{ id: 7, parent: 6 },
	{ id: 8, parent: 2 },
	{ id: 9, parent: 3 },
	{ id: 10, parent: 5 },
];
function TestComponent() {
	return (
		<ul>
			{list
				.filter(item => item.id === item.parent)
				.map(item => {
					return <li>{item}</li>;
				})}
		</ul>
	);
}

export default TestComponent;
