import styled, { css } from 'styled-components';
import CustomBtn from './CustomBtn';

type TaskPropsType = {
	id: string;
	title: string;
	isDone: boolean;
	deleteTask?: (id: string) => void;
	onChecked?: (id: string) => void;
};

function Task(props: TaskPropsType) {
	return (
		<TaskItem {...props}>
			<StyledInput
				type='checkbox'
				checked={props.isDone}
				onChange={() => props.onChecked && props.onChecked(props.id)}
			/>
			<span>{props.title}</span>
			<CustomBtn
				title='X'
				btnType='small'
				onClickHandler={() => props.deleteTask && props.deleteTask(props.id)}
			/>
		</TaskItem>
	);
}

const TaskItem = styled.li<TaskPropsType>`
	display: flex;
	align-items: center;
	column-gap: 5px;
	${props =>
		props.isDone &&
		css`
			opacity: 0.7;
		`}
`;

const StyledInput = styled.input`
	cursor: pointer;
`;

export default Task;
