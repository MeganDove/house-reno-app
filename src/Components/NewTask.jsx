import { forwardRef, useRef, useContext } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";

import TickIcon from "./ui/TickIcon.jsx";

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
			<dialog ref={ref} onClose={handleClose} className="">
				<form method="dialog">
					<button className="close-button">
						x
					</button>
				</form>
				<div className="">
					<h1 className="">Create a new task</h1>
					<label className="">Title:</label> 
					<input ref={newTaskTitle} type="text" className="" />
					<TickIcon onClick={handleSaveNewProject}>&#10003;</TickIcon>
				</div>
			</dialog>
		),
		document.getElementById("modal-root")
	);
});

export default NewTask;