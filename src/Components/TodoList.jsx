import { useDispatch } from "react-redux";
import { tasksActions } from "../store/tasks.js";

import "../Styles/Todo.css";

import TodoItem from "./TodoItem.jsx";
import Button from "./ui/Button.jsx";

export default function TodoList({title, taskId, todos}) {
	const dispatch = useDispatch();

	function handleAddNewTodo() {
		dispatch(tasksActions.updateTaskListValue({taskId: taskId, fieldId: "todos", value: {}}));
	}

	return (
		<div className="todo-section">
			<p className="label title-label">{title}</p>
			<div>
				<Button classNames="todo-add" handleOnClick={handleAddNewTodo}>Add</Button>
			</div>
			<ul className="todo-list">
				{todos.map((item) => {
					return (
						<li key={item.id}>
							<TodoItem taskId={taskId} item={item} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};