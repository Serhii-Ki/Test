import styled from 'styled-components';

function AppTest() {
	return <StyledContainer></StyledContainer>;
}

const StyledContainer = styled.div`
	width: 100px;
	height: 100px;
	background-color: red;

	&:hover {
		transform: scaleX(300%);
	}
`;

export default AppTest;
