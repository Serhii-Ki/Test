import styled from 'styled-components';
import AddTaskForm from './AddTaskForm';
import { TasksObj, TodoLists } from './AppTodoList';
import CustomBtn from './CustomBtn';
import Task from './Task';

type TasksPropsType = {
	tasks: TasksObj;
	todoLists: TodoLists[];
	addTask: (id: string, title: string) => void;
	changeFilter: (id: string, filter: 'all' | 'active' | 'finished') => void;
};

function TodoList(props: TasksPropsType) {
	return (
		<Container>
			<Title>Todo App</Title>
			{props.todoLists.map(list => (
				<div key={list.id}>
					<SubTitle>{list.title}</SubTitle>
					<AddTaskForm addTask={props.addTask} idTodoList={list.id} />
					<TasksList>
						{props.tasks[list.id]
							.filter(task =>
								list.filter === 'all'
									? true
									: list.filter === 'active'
									? !task.isDone
									: list.filter === 'finished' && task.isDone
							)
							.map(task => (
								<Task
									key={task.id}
									title={task.title}
									isDone={task.isDone}
									id={task.id}
								/>
							))}
					</TasksList>
					<BtnContainer>
						<CustomBtn
							onClickHandler={() => props.changeFilter(list.id, 'all')}
							className={list.filter === 'all' ? 'active-filter' : ''}
							title='all'
						/>
						<CustomBtn
							onClickHandler={() => props.changeFilter(list.id, 'active')}
							className={list.filter === 'active' ? 'active-filter' : ''}
							title='active'
						/>
						<CustomBtn
							onClickHandler={() => props.changeFilter(list.id, 'finished')}
							className={list.filter === 'finished' ? 'active-filter' : ''}
							title='finished'
						/>
					</BtnContainer>
				</div>
			))}
		</Container>
	);
}

const Title = styled.h1`
	text-align: center;
	margin-top: 50px;
`;

const Container = styled.div`
	max-width: 1150px;
	padding: 0 10px;
	text-align: center;
`;

const SubTitle = styled.h2`
	margin-top: 30px;
`;

const TasksList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	row-gap: 10px;
	max-width: 300px;
	margin: 15px auto 0 auto;
`;

const BtnContainer = styled.div`
	margin-top: 10px;
	display: flex;
	align-items: center;
	column-gap: 5px;
	justify-content: center;
`;

export default TodoList;
