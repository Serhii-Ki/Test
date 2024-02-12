import generateUniqueId from 'generate-unique-id';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddTaskForm from './AddTaskForm';
import { TasksType } from './AppTodoList';
import CustomBtn from './CustomBtn';
import Task from './Task';

type TasksPropsType = {
	tasks: TasksType[];
};

function TodoList(props: TasksPropsType) {
	const [tasksList, setTasksList] = useState<TasksType[]>(props.tasks);
	const [filter, setFilter] = useState<string>('all');
	const [renderList, setRenderList] = useState<TasksType[]>(tasksList);

	useEffect(() => {
		if (filter === 'active') {
			setRenderList(tasksList.filter(el => !el.isDone));
		} else if (filter === 'finished') {
			setRenderList(tasksList.filter(el => el.isDone));
		} else {
			setRenderList(tasksList);
		}
	}, [filter, tasksList]);

	const deleteTask = (id: string) => {
		setTasksList(tasksList.filter(el => el.id !== id));
	};

	const addTask = (task: string) => {
		if (task.trim() === '') {
			return;
		}
		setTasksList([
			...tasksList,
			{ id: generateUniqueId(), title: task, isDone: false },
		]);
	};

	const onFilterList = (filter: string) => {
		setFilter(filter);
	};

	const onChecked = (id: string) => {
		setTasksList(prevTasks =>
			prevTasks.map(task =>
				task.id === id ? { ...task, isDone: !task.isDone } : task
			)
		);
	};

	return (
		<Container>
			<Title>Todo App</Title>
			<AddTaskForm addTask={addTask} />
			<SubTitle>Tasks List</SubTitle>
			<BtnContainer>
				<CustomBtn
					className={filter === 'all' ? 'active-filter' : ''}
					title='all'
					onClickHandler={() => onFilterList('all')}
				/>
				<CustomBtn
					className={filter === 'active' ? 'active-filter' : ''}
					title='active'
					onClickHandler={() => onFilterList('active')}
				/>
				<CustomBtn
					className={filter === 'finished' ? 'active-filter' : ''}
					title='finished'
					onClickHandler={() => onFilterList('finished')}
				/>
			</BtnContainer>
			<TasksList>
				{renderList.map(task => (
					<Task
						key={task.id}
						title={task.title}
						isDone={task.isDone}
						deleteTask={deleteTask}
						id={task.id}
						onChecked={onChecked}
					/>
				))}
			</TasksList>
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
