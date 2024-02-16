import { useContext, useRef } from "react";
import { useSelector } from "react-redux";

import Task from "../Task.jsx";
import TaskOverview from "../TaskOverview.jsx";
import Tile from "../ui/Tile.jsx";
import NewTask from "../NewTask.jsx";

export default function TasksPage() {
	const tasks = useSelector(state => state.tasks.tasks);
	const newTaskModal = useRef();

	function handleClickNewTask() {
		newTaskModal.current.showModal();
	}

	return (
		<>
			<NewTask ref={newTaskModal} />
			<div className="grid-container">
				{
					tasks.map((task) => <TaskOverview key={task.id} task={task}/>)
				}
				<Tile highlight onClick={handleClickNewTask}>
					<p className="mb-8 font-bold md:text-l text-slate-200">+ New Task</p>
				</Tile>
			</div>
		</>
	);
}