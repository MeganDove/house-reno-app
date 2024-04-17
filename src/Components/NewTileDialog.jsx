import { forwardRef, useRef, useContext } from "react";
import { createPortal } from "react-dom";
import { useEffect } from "react";

import "../Styles/NewTask.css";

import TickIcon from "./ui/TickIcon.jsx";
import XIcon from "./ui/XIcon.jsx";

const NewTask = forwardRef(function NewTileDialog({dispatchNewTileAction, title, label}, ref) {
	const newTileTitle = useRef();

	useEffect(() => {
		newTileTitle.current.focus();
	 }, []);

	function handleSaveNewTile() {
		dispatchNewTileAction(newTileTitle.current.value);
		newTileTitle.current.value = "";
		ref.current.close();
	}

	function handleKeyPress(e) {
		const key = e.key;
		if(key === "Enter") {
			handleSaveNewTile();
		}
	}

	function handleClose() {
		newTileTitle.current.value = "";
	}

	return createPortal(
		(
			<dialog ref={ref} onClose={handleClose} className="new-task-modal">
				<form method="dialog">
					<XIcon />
				</form>
				<div className="">
					<h1 className="">{title}</h1>
					<label className="">{label+":"}</label> 
					<input ref={newTileTitle} type="text" className="new-task-input" autofocus="true"  />
					<TickIcon onClick={handleSaveNewTile} />
				</div>
			</dialog>
		),
		document.getElementById("modal-root")
	);
});

export default NewTask;