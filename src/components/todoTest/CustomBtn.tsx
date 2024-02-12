import styled, { css } from 'styled-components';

type BtnStyledType = {
	btnType?: string;
};

type BtnPropsType = {
	title: string;
	className?: string;
	onClickHandler?: () => void;
} & BtnStyledType;

function CustomBtn(props: BtnPropsType) {
	return (
		<Button {...props} onClick={props.onClickHandler}>
			{props.title}
		</Button>
	);
}

const Button = styled.button<BtnStyledType>`
	cursor: pointer;
	padding: 3px 5px;
	border: 1px solid #ccc;
	border-radius: 5px;
	font-size: 16px;
	${props =>
		props.btnType === 'small' &&
		css`
			padding: 2px;
		`}
`;

export default CustomBtn;
