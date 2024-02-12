import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import CustomBtn from './CustomBtn';
import CustomInput from './CustomInput';

type AddPropsType = {
	addTask: (task: string) => void;
};

function AddTaskForm(props: AddPropsType) {
	const [inputValue, setInputValue] = useState<string>('');
	const [isCorrect, setIsCorrect] = useState<boolean>(true);

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value);
		setIsCorrect(true);
	};

	const addTask = () => {
		if (inputValue.trim() === '') {
			setIsCorrect(false);
			return;
		}
		props.addTask(inputValue);
		setInputValue('');
	};

	return (
		<div>
			<SubTitle>Add new task</SubTitle>
			<CustomInput
				className={isCorrect ? '' : 'error-input'}
				value={inputValue}
				onChangeHandler={onChangeHandler}
			/>
			<CustomBtn title='Add' onClickHandler={addTask} />
			{!isCorrect && <p style={{ color: 'red' }}>Enter correct title</p>}
		</div>
	);
}

const SubTitle = styled.h2`
	text-align: center;
	margin-top: 20px;
	margin-bottom: 15px;
`;

export default AddTaskForm;
