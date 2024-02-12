import { ChangeEvent } from 'react';
import styled from 'styled-components';

type InputPropsType = {
	type?: string;
	value: string;
	onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
	className?: string;
};

function CustomInput(props: InputPropsType) {
	return (
		<StyledInput
			className={props.className}
			value={props.value}
			type={props.type || 'text'}
			onChange={props.onChangeHandler}
		/>
	);
}

const StyledInput = styled.input`
	display: inline-block;
	padding: 5px;
	background-color: transparent;
	border-radius: 5px;
	font-size: 16px;
	&:focus {
		outline: none;
	}
`;

export default CustomInput;
