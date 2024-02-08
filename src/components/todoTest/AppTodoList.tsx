import TodoList from './TodoList';

export type TasksType = {
	id: number;
	title: string;
	isDone: boolean;
};

function AppTodoList() {
	const tasks: TasksType[] = [
		{
			id: 1,
			title: 'JavaScript',
			isDone: true,
		},
		{
			id: 2,
			title: 'React',
			isDone: false,
		},
		{
			id: 3,
			title: 'Rest Api',
			isDone: true,
		},
		{
			id: 4,
			title: 'Html',
			isDone: false,
		},
		{
			id: 5,
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
