import { useState, useRef } from "react";

import Task from "./Task.jsx";
import Tile from "./ui/Tile.jsx";

export default function TaskOverview({task}) {
	const taskModal = useRef();
	
	function handleOpenTask() {
		taskModal.current.open();
	}

	return (
		<>
			<Tile onClick={handleOpenTask}>
				<Task ref={taskModal} task={task} />
				<div className="tile-header">
					<h1>{task.title}</h1>
				</div>
				<div className="tile-text-row">
					<h3>Status: </h3>
					<p>{task.status}</p>
				</div>
				<div className="tile-text-row">
					<h3>Actionable by: </h3>
					<p>{task.actionableBy || "no one"}</p>
				</div>
			</Tile>
		</>
	);
}