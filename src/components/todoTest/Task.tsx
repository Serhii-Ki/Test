import styled from 'styled-components';
import CustomBtn from './CustomBtn';

type TaskPropsType = {
	id: string;
	title: string;
	isDone: boolean;
	deleteTask: (id: string) => void;
	onChecked: (id: string) => void;
};

function Task(props: TaskPropsType) {
	return (
		<TaskItem>
			<StyledInput
				type='checkbox'
				checked={props.isDone}
				// onChangeHandler={() => props.onChecked(props.id)}
			/>
			<span>{props.title}</span>
			<CustomBtn
				title='X'
				btnType='small'
				onClickHandler={() => props.deleteTask(props.id)}
			/>
		</TaskItem>
	);
}

const TaskItem = styled.li`
	display: flex;
	align-items: center;
	column-gap: 5px;
`;

const StyledInput = styled.input`
	cursor: pointer;
`;

export default Task;
