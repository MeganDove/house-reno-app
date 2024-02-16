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

	function handleClose() {
		newTaskTitle.current.value = "";
	}

	return createPortal(
		(
			<dialog ref={ref} onClose={handleClose} className="bg-slate-600 rounded-lg">
				<div className="py-6 px-10">
					<h1 className="mb-8 font-bold md:text-xl text-slate-100 ">Create a new task</h1>
					<label className="mb-8 font-bold md:text-l text-slate-200 mr-5">Title:</label> 
					<input ref={newTaskTitle} type="text" className="w-96 rounded-lg p-1 md:text-l mr-10" />
					<TickIcon onClick={handleSaveNewProject}>&#10003;</TickIcon>
				</div>
			</dialog>
		),
		document.getElementById("modal-root")
	);
});

export default NewTask;