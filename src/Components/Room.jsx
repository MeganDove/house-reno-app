		// PINTEREST LINK
		// UPLOAD ROOM PLAN IMAGE
		// UPLOAD VIDEOS/PHOTOS
		// DESCRIPTION
		// TODO LIST

import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";

import "../Styles/Task.css";

import TodoList from "./TodoList.jsx";
import EditableTextField from "./ui/EditableTextField.jsx";
import DropdownField from "./ui/DropdownField.jsx";
import XIcon from "./ui/XIcon.jsx";
import PinterestBoard from "./PinterestBoard.jsx";

import { roomsActions } from "../store/rooms.js";

const Room = forwardRef(function Room({room}, ref) {
	const roomModal = useRef();
	const dispatch = useDispatch();

  	const users = useSelector(state => state.users.users);

	useImperativeHandle(ref, () =>{
		return {
			open() {
				roomModal.current.showModal();
			},
			close() {
				roomModal.current.close();
			}
		};
	});

	function handleUpdateRoom(fieldId, value) {
		dispatch(roomsActions.updateRoomSingleValue({roomId: room.id, fieldId: fieldId, value: value}));
	}

	function handleUpdateTodo(elementId, elementFieldId, value) {
		dispatch(roomsActions.updateRoomListValue({roomId: room.id, fieldId: "todos", elementId: elementId, value: value}));
	}

	return createPortal(
		(
			<dialog ref={roomModal} className="task-modal">
				<main>
					<div className="top-section">
						<form method="dialog">
							<XIcon />
						</form>
					</div>

					<div className="task-grid-container">
						<div className="task-title-description">
							<div>
								 <EditableTextField 
								 	value={room.title}
								 	fieldId="title"
								 	onUpdateField={handleUpdateRoom}
								 	classNames="title"
								 />
							</div>
						</div>
						<div className="task-main-contents">
							<div className="task-text-row">
								 <p className="label title-label">Notes:</p>
								 <EditableTextField 
								 	value={room.notes}
								 	fieldId="notes"
								 	onUpdateField={handleUpdateRoom}
								 	type="paragraph"
								 />
							</div>
							<div className="task-text-row">
								 {//<TodoList title="To do:" roomId={room.id} todos={room.todos || []} onUpdateTodo={handleUpdateTodo}/>
									}
							</div>
							<PinterestBoard url="https://www.pinterest.co.uk/jslvisions/pink-inspiration-board/"/>
						</div>
					</div>
				</main>
			</dialog>
		),
		document.getElementById("modal-root")
	);
});

export default Room;