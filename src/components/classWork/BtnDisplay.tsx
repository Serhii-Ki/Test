import { styled } from 'styled-components';
import CustomBtn from './CustomBtn';

type BtnDisplayPropsType = {
	isMaxValue: boolean;
	minCount: number;
	count: number;
	increaseCount: () => void;
	resetCount: () => void;
	viewSetCount: () => void;
};

function BtnDisplay(props: BtnDisplayPropsType) {
	return (
		<BtnWrapper>
			<CustomBtn
				title='inc'
				onClickHandler={props.increaseCount}
				isDisable={props.isMaxValue}
			/>
			<CustomBtn
				title='rest'
				onClickHandler={props.resetCount}
				isDisable={props.count === props.minCount}
			/>
			<CustomBtn title='set' onClickHandler={props.viewSetCount} />
		</BtnWrapper>
	);
}

const BtnWrapper = styled.div`
	width: 500px;
	height: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 3px solid blue;
	border-radius: 10px;
	gap: 30px;
`;

export default BtnDisplay;
