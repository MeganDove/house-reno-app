import { useDispatch } from "react-redux";

import "../Styles/Contacts.css";

import { tasksActions } from "../store/tasks.js";

import Contact from "./Contact.jsx";
import Button from "./ui/Button.jsx";

export default function Contacts({taskId, contacts}) {
	const dispatch = useDispatch();

	function handleAddNewContact() {
		dispatch(tasksActions.updateTaskListValue({taskId: taskId, fieldId: "contacts", value: {}}));
	}

	return (
		<div className="contacts-section">
			<p className="label contacts-label title-label">Contacts:</p>
			<div>
				<Button classNames="contacts-add" handleOnClick={handleAddNewContact}>Add new</Button>
			</div>
			<ul className="contacts-list">
				{contacts.map((contact) => {
					return (
						<li key={contact.id}>
							<Contact
								taskId={taskId}
								contact={contact}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};