import styled from 'styled-components';
import TestComponent from './components/TestComponent';
import { MyTheme } from './styles/ThemeStyles';

function App() {
	return (
		<div className='App'>
			<TestComponent />
		</div>
	);
}

export default App;

const Wrapper = styled.div`
	width: 200px;
	height: 300px;
	background-color: ${MyTheme.colors.main};
`;
