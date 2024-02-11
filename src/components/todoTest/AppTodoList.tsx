import generateUniqueId from 'generate-unique-id';
import TodoList from './TodoList';

export type TasksType = {
	id: string;
	title: string;
	isDone: boolean;
};

function AppTodoList() {
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

	return (
		<div>
			<TodoList tasks={tasks} />
		</div>
	);
}

export default AppTodoList;
