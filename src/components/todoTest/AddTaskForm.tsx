import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import CustomBtn from './CustomBtn';
import CustomInput from './CustomInput';

type AddPropsType = {
	addTask: (task: string) => void;
};

function AddTaskForm(props: AddPropsType) {
	const [inputValue, setInputValue] = useState<string>('');

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value);
	};

	return (
		<div>
			<SubTitle>Add new task</SubTitle>
			<CustomInput value={inputValue} onChangeHandler={onChangeHandler} />
			<CustomBtn title='Add' onClickHandler={() => props.addTask(inputValue)} />
		</div>
	);
}

const SubTitle = styled.h2`
	text-align: center;
	margin-top: 20px;
	margin-bottom: 15px;
`;

export default AddTaskForm;
