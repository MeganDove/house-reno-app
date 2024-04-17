import { useState, useRef } from "react";

import Room from "./Room.jsx";
import Tile from "./ui/Tile.jsx";

export default function RoomsOverview({room}) {
	const roomModal = useRef();
	
	function handleOpenRoom() {
		roomModal.current.open();
	}

	return (
		<>
			<Tile onClick={handleOpenRoom}>
				<Room ref={roomModal} room={room} />
				<div className="tile-header">
					<h1>{room.title}</h1>
				</div>
			</Tile>
		</>
	);
}