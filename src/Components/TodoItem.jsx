import EditableTextField from "./ui/EditableTextField.jsx";
import BinIcon from "./ui/BinIcon.jsx";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { tasksActions } from "../store/tasks.js";

export default function Contact({taskId, item}) {
	const dispatch = useDispatch();

	function handleUpdateTodo(elementFieldId, value) {
		dispatch(tasksActions.updateTaskListValue({taskId: taskId, fieldId: "todos", elementId: item.id, elementFieldId: elementFieldId, value: value}));
	}

	function handleDeleteTodo() {
		dispatch(tasksActions.deleteTaskListItem({taskId: taskId, fieldId: "todos", elementId: item.id}));
	}

	function handleToggleCompleted() {
		dispatch(tasksActions.updateTaskListValue({taskId: taskId, fieldId: "todos", elementId: item.id, elementFieldId: "completed", value: !item.completed}));
	}

	return (
		<div className="todo-item-section">
			<div className="todo-details">
				<EditableTextField 
				 	value={item.text}
				 	fieldId="text"
				 	onUpdateField={handleUpdateTodo}
				 	//TODO: add this to ediabletextfield
				 	editable={item.completed}
				 	classNames={item.completed ? " strikethrough" : ""}
				/>
			</div>
			<BinIcon onClick={handleDeleteTodo} />
		</div>
	);
};