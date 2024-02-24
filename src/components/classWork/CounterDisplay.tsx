import styled, { css } from 'styled-components';

type CounterPropsType = {
	count: number;
	isMaxValue: boolean;
};

function CounterDisplay(props: CounterPropsType) {
	return <Counter {...props}>{props.count}</Counter>;
}

const Counter = styled.div<CounterPropsType>`
	width: 500px;
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 3px solid blue;
	border-radius: 10px;
	font-size: 68px;
	color: white;

	${props =>
		props.isMaxValue &&
		css`
			color: red;
		`}
`;

export default CounterDisplay;
