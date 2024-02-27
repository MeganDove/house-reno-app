import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";

import Contacts from "./Contacts.jsx";
import TodoList from "./TodoList.jsx";
import EditableTextField from "./ui/EditableTextField.jsx";
import DropdownField from "./ui/DropdownField.jsx";

import { tasksActions } from "../store/tasks.js";

// ACTIONABLE BY
// TO DO LIST
// DESCRIPTION
// CONTACT DETAILS
// CURRENT STATUS
// LINK TO FUNDS?

function convertUsersToOptions(users) {
	return users.map(({username, displayName}) => { return {value:username, label:displayName} });
}

//MOVE TO USERS CONTEXT
function getActionableByDisplayName(actionableBy) {
	let user = EXAMPLE_USERS.find((user) => actionableBy === user.username);
	return user.displayName;
}

const Task = forwardRef(function Task({task}, ref) {
	const taskModal = useRef();
	const dispatch = useDispatch();

  	const users = useSelector(state => state.users.users);

	useImperativeHandle(ref, () =>{
		return {
			open() {
				taskModal.current.showModal();
			},
			close() {
				taskModal.current.close();
			}
		};
	});

	function handleUpdateTask(fieldId, value) {
		dispatch(tasksActions.updateTaskSingleValue({taskId: task.id, fieldId: fieldId, value: value}));
	}

	function handleUpdateTodo(elementId, elementFieldId, value) {
		dispatch(tasksActions.updateTaskListValue({taskId: task.id, fieldId: "todos", elementId: elementId, value: value}));
	}

	console.log(task);

	const userOptions = convertUsersToOptions(users);

	return createPortal(
		(
			<dialog ref={taskModal} className="task-modal">
				<main>
					<div className="top-section">
						<form method="dialog">
							<button className="close-button">
								x
							</button>
						</form>
					</div>

					<div className="task-grid-container">
						<div className="task-title-description">
							<div>
								 <EditableTextField 
								 	value={task.title}
								 	fieldId="title"
								 	onUpdateField={handleUpdateTask}
								 	classNames="title"
								 />
							</div>
   							<div className="task-text-row">
								 <p className="label title-label">Status:</p>
								 <EditableTextField 
								 	value={task.status}
								 	fieldId="status"
								 	onUpdateField={handleUpdateTask}
								 />
							</div>
						</div>
						<div className="task-actionable-by">
							<div className="task-text-row">
								<h3 className="label title-label">Actionable by:</h3>
								<DropdownField 
								 	value={task.actionableBy}
								 	fieldId="actionableBy"
								 	onUpdateField={handleUpdateTask}
								 	options={userOptions}
								 />
							</div>
						</div>
						<div className="task-main-contents">
							<div className="task-text-row">
								 <p className="label title-label">Notes:</p>
								 <EditableTextField 
								 	value={task.notes}
								 	fieldId="notes"
								 	onUpdateField={handleUpdateTask}
								 	type="paragraph"
								 />
							</div>
							<div className="task-text-row">
								<Contacts taskId={task.id} contacts={task.contacts || []}/>
							</div>
							<div className="task-text-row">
								 <TodoList title="To do:" taskId={task.id} todos={task.todos || []} onUpdateTodo={handleUpdateTodo}/>
							</div>
						</div>
					</div>
				</main>
			</dialog>
		),
		document.getElementById("modal-root")
	);
});

export default Task;