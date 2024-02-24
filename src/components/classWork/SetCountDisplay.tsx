import styled from 'styled-components';
import CustomBtn from './CustomBtn';
import CustomInput from './CustomInput';

type SetCounterPropsType = {
	minCount: number;
	maxCount: number;
	viewCount: () => void;
	onChangeMinValue: (newValue: number) => void;
	onChangeMaxValue: (newValue: number) => void;
};

function SetCountDisplay(props: SetCounterPropsType) {
	return (
		<SetCountWrapper>
			<InputWrapper>
				<CustomInput
					inputValue={props.minCount}
					onChange={props.onChangeMinValue}
				/>
				<LabelInput>min</LabelInput>
			</InputWrapper>
			<InputWrapper>
				<CustomInput
					inputValue={props.maxCount}
					onChange={props.onChangeMaxValue}
				/>
				<LabelInput>max</LabelInput>
			</InputWrapper>
			<BtnWrapper>
				<CustomBtn title='set' onClickHandler={() => {}} />
				<CustomBtn title='cancel' onClickHandler={props.viewCount} />
			</BtnWrapper>
		</SetCountWrapper>
	);
}

const SetCountWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	width: 500px;
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 3px solid blue;
`;

const BtnWrapper = styled.div`
	display: flex;
	gap: 30px;
`;

const InputWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;

const LabelInput = styled.span`
	font-size: 38px;
	color: white;
`;

export default SetCountDisplay;
