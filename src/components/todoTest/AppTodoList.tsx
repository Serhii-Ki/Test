import generateUniqueId from 'generate-unique-id';
import { useState } from 'react';
import TodoList from './TodoList';

export type TasksType = {
	id: string;
	title: string;
	isDone: boolean;
};

export type TodoLists = {
	id: string;
	title: string;
	filter: 'all' | 'active' | 'finished';
};

export type TasksObj = {
	[key: string]: TasksType[];
};

function AppTodoList() {
	const todoLists: TodoLists[] = [
		{
			id: generateUniqueId(),
			title: 'Name Todo List',
			filter: 'all',
		},
	];

	const tasks: TasksType[] = [
		{
			id: generateUniqueId(),
			title: 'JavaScript',
			isDone: true,
		},
		{
			id: generateUniqueId(),
			title: 'React',
			isDone: false,
		},
		{
			id: generateUniqueId(),
			title: 'Rest Api',
			isDone: true,
		},
		{
			id: generateUniqueId(),
			title: 'Html',
			isDone: false,
		},
		{
			id: generateUniqueId(),
			title: 'CSS',
			isDone: true,
		},
	];

	const tasksObj: TasksObj = todoLists.reduce((acc: TasksObj, el) => {
		acc[el.id] = [...tasks];
		return acc;
	}, {});

	const [todoListsState, setTodoListsState] = useState<TodoLists[]>(todoLists);
	const [tasksState, setTasksState] = useState<TasksObj>(tasksObj);

	const changeFilter = (id: string, filter: 'all' | 'active' | 'finished') => {
		setTodoListsState(prevTodoListState =>
			prevTodoListState.map(el =>
				el.id === id ? { ...el, filter: filter } : el
			)
		);
	};

	const addTask = (id: string, title: string) => {
		const newTask: TasksType = {
			id: generateUniqueId(),
			title: title,
			isDone: false,
		};
		setTasksState(prevTasksState => ({
			...prevTasksState,
			[id]: [...prevTasksState[id], newTask],
		}));
	};

	return (
		<div>
			<TodoList
				todoLists={todoListsState}
				tasks={tasksState}
				addTask={addTask}
				changeFilter={changeFilter}
			/>
		</div>
	);
}

export default AppTodoList;
