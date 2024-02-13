import Star from './Star';

type StarsPropsType = {
	count: number;
	setCount: (n: number) => void;
};

function Stars({ count, setCount }: StarsPropsType) {
	return (
		<div>
			<Star bolt={count > 0} onClick={() => setCount(1)} />
			<Star bolt={count > 1} onClick={() => setCount(2)} />
			<Star bolt={count > 2} onClick={() => setCount(3)} />
			<Star bolt={count > 3} onClick={() => setCount(4)} />
			<Star bolt={count > 4} onClick={() => setCount(5)} />
		</div>
	);
}

export default Stars;
