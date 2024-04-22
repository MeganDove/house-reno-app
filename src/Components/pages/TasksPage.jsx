import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../../Styles/TasksPage.css";

import { sendTaskData, fetchTaskData, tasksActions } from "../../store/tasks.js";

import TaskOverview from "../TaskOverview.jsx";
import Tile from "../ui/Tile.jsx";
import NewTileDialog from "../NewTileDialog.jsx";

let isInitial = true;

export default function TasksPage() {
	const { tasks, changed } = useSelector(state => state.tasks);
	const newTaskModal = useRef();
	const dispatch = useDispatch();

	const notification = useSelector((state) => state.pageState.notification);
	console.log(notification);

	useEffect(() => {
		if(isInitial) {
	    	isInitial = false;
	      	return;
	    }
		if(changed) {
		    dispatch(sendTaskData(tasks));
		}
	}, [tasks, dispatch]); 

	function handleClickNewTask() {
		newTaskModal.current.showModal();
	}

	if(notification && notification.status === "error") {
		return (<h3>{notification.message}</h3>);
	} else return (
		<>
			<NewTileDialog
				ref={newTaskModal}
				dispatchNewTileAction={(value) => dispatch(tasksActions.addTask({title: value}))}
				title="Create a new task"
				label="Title"
			/>
			<div className="grid-container">
				{
					tasks.length ? tasks.map((task) => <TaskOverview key={task.id} task={task}/>) : undefined
				}
				<Tile highlight onClick={handleClickNewTask}>
					<p className="">+ New Task</p>
				</Tile>
			</div>
		</>
	);
}