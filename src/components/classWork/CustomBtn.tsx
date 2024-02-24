import styled from 'styled-components';

type BtnPropsType = {
	title: string;
	isDisable?: boolean;
	onClickHandler: () => void;
};

function CustomBtn(props: BtnPropsType) {
	return (
		<Btn disabled={props.isDisable || false} onClick={props.onClickHandler}>
			{props.title}
		</Btn>
	);
}

const Btn = styled.button`
	background-color: transparent;
	outline: none;
	padding: 15px 30px;
	border: 2px solid blue;
	border-radius: 5px;
	font-size: 32px;
	color: white;
	cursor: pointer;

	&:hover {
		background-color: #1181d6;
	}

	&:disabled {
		opacity: 0.6;

		&:hover {
			background-color: transparent;
		}
	}
`;

export default CustomBtn;
