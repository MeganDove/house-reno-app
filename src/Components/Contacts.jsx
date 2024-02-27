import Contact from "./Contact.jsx";

import { useDispatch } from "react-redux";
import { tasksActions } from "../store/tasks.js";

export default function Contacts({taskId, contacts}) {
	const dispatch = useDispatch();

	function handleAddNewContact() {
		dispatch(tasksActions.updateTaskListValue({taskId: taskId, fieldId: "contacts", value: {}}));
	}

	return (
		<div className="contacts-section">
			<p className="label contacts-label title-label">Contacts:</p>
			<div>
				<button className="add-button" id="contacts-add" onClick={handleAddNewContact}>Add new</button>
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