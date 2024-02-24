import { ChangeEvent } from 'react';
import styled from 'styled-components';

type InputPropsType = {
	inputValue: number;
	onChange: (newValue: number) => void;
};

function CustomInput(props: InputPropsType) {
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		props.onChange(Number(e.currentTarget.value));
	};
	return <Input value={props.inputValue} onChange={onChangeHandler} />;
}

const Input = styled.input`
	background-color: transparent;
	height: 40px;
	width: 50%;
	color: white;
	font-size: 37px;
	border: 2px solid blue;
	padding: 10px;
`;

export default CustomInput;
