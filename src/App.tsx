import styled from 'styled-components';
import AppTodoList from './components/todoTest/AppTodoList';
import { MyTheme } from './styles/ThemeStyles';

function App() {
	return (
		<div className='App'>
			<AppTodoList />
			{/* <AppTest /> */}
		</div>
	);
}

export default App;

const Wrapper = styled.div`
	width: 200px;
	height: 300px;
	background-color: ${MyTheme.colors.main};
`;
