import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import BtnDisplay from './BtnDisplay';
import CounterDisplay from './CounterDisplay';
import SetCountDisplay from './SetCountDisplay';

function AppClassWork() {
	const [minCount, setMinCount] = useState<number>(0);
	const [count, setCount] = useState<number>(minCount);
	const [maxCount, setMaxCount] = useState<number>(5);
	const [isMaxValue, setIsMaxValue] = useState<boolean>(false);
	const [viewCounter, setViewCounter] = useState<string>('counter');

	const increaseCount = () => {
		setCount(prev => (prev += 1));
	};

	const resetCount = () => {
		setCount(0);
	};

	const viewSetCount = () => {
		setViewCounter('setCount');
	};

	const viewCount = () => {
		setViewCounter('counter');
	};

	const onChangeMaxValue = (newValue: number) => {
		if (newValue > minCount) {
			setMaxCount(newValue);
		} else {
			return;
		}
	};

	const onChangeMinValue = (newValue: number) => {
		if (newValue < maxCount && newValue >= 0) {
			setMinCount(newValue);
		} else {
			return;
		}
	};

	useEffect(() => {
		if (count === maxCount) {
			setIsMaxValue(true);
		} else {
			setIsMaxValue(false);
		}
	}, [count, maxCount]);

	return (
		<MainDisplay>
			{viewCounter === 'counter' ? (
				<>
					<CounterDisplay count={count} isMaxValue={isMaxValue} />
					<BtnDisplay
						isMaxValue={isMaxValue}
						minCount={minCount}
						count={count}
						increaseCount={increaseCount}
						resetCount={resetCount}
						viewSetCount={viewSetCount}
					/>
				</>
			) : (
				<SetCountDisplay
					maxCount={maxCount}
					minCount={minCount}
					viewCount={viewCount}
					onChangeMinValue={onChangeMinValue}
					onChangeMaxValue={onChangeMaxValue}
				/>
			)}
		</MainDisplay>
	);
}

const MainDisplay = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 700px;
	min-height: 600px;
	border: 3px solid blue;
	border-radius: 10px;
	padding: 50px 0;
`;

export default AppClassWork;
