import EditableTextField from "./ui/EditableTextField.jsx";

export default function Contact({contact, onUpdateContact}) {
	const staticFieldClass = "md:text-l text-slate-200 rounded-lg border-solid border-4 border-transparent hover:border-amber-600 p-0.5";
	const editableFieldClass = "md:text-l text-slate-600 rounded-lg focus:border-solid focus:border-blue-400 p-0.5";

	function handleUpdateContact(fieldId, currentText) {
		onUpdateContact(contact.id, fieldId, currentText);
	}

	return (
		<li key={contact.id} className="contact-list-item">
			<div className="">
				<p className="label">Name:</p>
				<EditableTextField 
					staticFieldClass={staticFieldClass}
				 	editableFieldClass={editableFieldClass}
				 	value={contact.name}
				 	fieldId="name"
				 	onUpdateField={handleUpdateContact}
				 />
			</div>
			<div className="">
				<p className="label">Role:</p>
				<EditableTextField 
					staticFieldClass={staticFieldClass}
				 	editableFieldClass={editableFieldClass}
				 	value={contact.role}
				 	fieldId="role"
				 	onUpdateField={handleUpdateContact}
				 />
			</div>
			<div className="">
				<p className="label">Email:</p>
				<EditableTextField 
					staticFieldClass={staticFieldClass}
				 	editableFieldClass={editableFieldClass}
				 	value={contact.email}
				 	fieldId="email"
				 	onUpdateField={handleUpdateContact}
				 />
			</div>
			<div className="">
				<p className="label">Phone no.:</p>
				<EditableTextField 
					staticFieldClass={staticFieldClass}
				 	editableFieldClass={editableFieldClass}
				 	value={contact.phoneNumber}
				 	fieldId="phoneNumber"
				 	onUpdateField={handleUpdateContact}
				 />
			</div>
		</li>
		
	);
};