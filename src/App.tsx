import styled from 'styled-components';
import AppClassWork from './components/classWork/AppClassWork';

function App() {
	return (
		<Wrapper className='App'>
			<AppClassWork />
			{/* <AppTodoList /> */}
			{/* <AppTest /> */}
		</Wrapper>
	);
}

export default App;

const Wrapper = styled.div`
	min-height: 100vh;
	display: grid;
	justify-items: center;
	align-items: center;
`;
