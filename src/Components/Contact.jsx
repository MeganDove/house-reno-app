import { useDispatch } from "react-redux";
import { tasksActions } from "../store/tasks.js";

import "../Styles/Contacts.css";

import EditableTextField from "./ui/EditableTextField.jsx";
import BinIcon from "./ui/BinIcon.jsx";

export default function Contact({taskId, contact}) {
	const dispatch = useDispatch();
	function handleUpdateContact(elementFieldId, value) {
		dispatch(tasksActions.updateTaskListValue({taskId: taskId, fieldId: "contacts", elementId: contact.id, elementFieldId: elementFieldId, value: value}));
	}

	function handleDeleteContact() {
		const confirm = window.confirm("Are you sure?");
		if(confirm) {
			dispatch(tasksActions.deleteTaskListItem({taskId: taskId, fieldId: "contacts", elementId: contact.id}));
		}
	}

	return (
		<div className="contact-section">
			<div className="contact-details">
				<div className="">
					<p className="label">Name:</p>
					<EditableTextField 
					 	value={contact.name}
					 	fieldId="name"
					 	onUpdateField={handleUpdateContact}
					 />
				</div>
				<div className="">
					<p className="label">Role:</p>
					<EditableTextField 
					 	value={contact.role}
					 	fieldId="role"
					 	onUpdateField={handleUpdateContact}
					 />
				</div>
				<div className="">
					<p className="label">Email:</p>
					<EditableTextField 
					 	value={contact.email}
					 	fieldId="email"
					 	onUpdateField={handleUpdateContact}
					 />
				</div>
				<div className="">
					<p className="label">Phone no.:</p>
					<EditableTextField 
					 	value={contact.phoneNumber}
					 	fieldId="phoneNumber"
					 	onUpdateField={handleUpdateContact}
					 />
				</div>
			</div>
			<BinIcon onClick={handleDeleteContact} />
		</div>	
	);
};