import TodoItem from "./TodoItem.jsx";

import { useDispatch } from "react-redux";
import { tasksActions } from "../store/tasks.js";

export default function TodoList({title, taskId, todos}) {
	const dispatch = useDispatch();

	function handleAddNewTodo() {
		dispatch(tasksActions.updateTaskListValue({taskId: taskId, fieldId: "todos", value: {}}));
	}

	return (
		<div className="todo-section">
			<p className="label title-label">{title}</p>
			<div>
				<button className="add-button" id="todo-add" onClick={handleAddNewTodo}>Add</button>
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