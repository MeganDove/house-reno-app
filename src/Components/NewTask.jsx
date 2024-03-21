import { forwardRef, useRef, useContext } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";

import "../Styles/NewTask.css";

import TickIcon from "./ui/TickIcon.jsx";
import XIcon from "./ui/XIcon.jsx";

import { tasksActions } from "../store/tasks.js";

const NewTask = forwardRef(function NewTask({}, ref) {
	const newTaskTitle = useRef();
	const dispatch = useDispatch();

	function handleSaveNewProject() {
		dispatch(tasksActions.addTask({title: newTaskTitle.current.value}));
		newTaskTitle.current.value = "";
		ref.current.close();
	}

	function handleKeyPress(e) {
		const key = e.key;
		if(key === "Enter") {
			handleSaveNewProject();
		}
	}

	function handleClose() {
		newTaskTitle.current.value = "";
	}

	return createPortal(
		(
			<dialog ref={ref} onClose={handleClose} className="new-task-modal">
				<form method="dialog">
					<XIcon />
				</form>
				<div className="">
					<h1 className="">Create a new task</h1>
					<label className="">Title:</label> 
					<input ref={newTaskTitle} type="text" className="new-task-input" />
					<TickIcon onClick={handleSaveNewProject} />
				</div>
			</dialog>
		),
		document.getElementById("modal-root")
	);
});

export default NewTask;