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
	// TODO: const notification = useSelector((state) => state.userState.notification);
	console.log(tasks);

	useEffect(() => {
	    dispatch(fetchTaskData());
	}, [dispatch]);

	useEffect(() => {
		if(isInitial) {
	    	isInitial = false;
	      	return;
	    }
	    console.log(changed);
		if(changed) {
		    dispatch(sendTaskData(tasks));
		}
	}, [tasks, dispatch]); 

	function handleClickNewTask() {
		newTaskModal.current.showModal();
	}

	return (
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