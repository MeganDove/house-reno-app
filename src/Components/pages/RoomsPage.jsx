import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//TODO: Update
import "../../Styles/TasksPage.css";

import { sendRoomData, fetchRoomData, roomsActions } from "../../store/rooms.js";

import RoomsOverview from "../RoomsOverview.jsx";
import Tile from "../ui/Tile.jsx";
import NewTileDialog from "../NewTileDialog.jsx";

let isInitial = true;

export default function RoomsPage() {
	const { rooms, changed } = useSelector(state => state.rooms);
	const newRoomModal = useRef();
	const dispatch = useDispatch();
	const notification = useSelector((state) => state.pageState.notification);

	useEffect(() => {
		if(isInitial) {
	    	isInitial = false;
	      	return;
	    }
	    console.log(changed);
		if(changed) {
			console.log(rooms);
		    dispatch(sendRoomData(rooms));
		}
	}, [rooms, dispatch]); 

	function handleClickNewRoom() {
		newRoomModal.current.showModal();
	}

	if(notification) {
		return (<h3>{notification.message}</h3>);
	} else return (
		<>
			<NewTileDialog
				ref={newRoomModal}
				dispatchNewTileAction={(value) => dispatch(roomsActions.addRoom({title: value}))}
				title="Create a new room"
				label="Name"
			/>
			<div className="grid-container">
				{
					rooms.length ? rooms.map((room) => <RoomsOverview key={room.id} room={room}/>) : undefined
				}
				<Tile highlight onClick={handleClickNewRoom}>
					<p className="">+ New Room</p>
				</Tile>
			</div>
		</>
	);
}