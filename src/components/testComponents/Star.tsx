import styled from 'styled-components';

type StarPropsType = {
	bolt: boolean;
	onClick: () => void;
};

function Star({ bolt, onClick }: StarPropsType) {
	return (
		<StyledStar onClick={() => onClick()}>
			{bolt ? <strong>star</strong> : 'star'}
		</StyledStar>
	);
}

const StyledStar = styled.span`
	font-size: 34px;
	display: inline-block;
	cursor: pointer;
	&:not(:last-child) {
		margin-right: 10px;
	}
`;

export default Star;
