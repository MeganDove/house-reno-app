import Contact from "./Contact.jsx";

export default function Contacts({contacts, onUpdateContacts}) {

	function handleUpdateContact(contactId, fieldId, newText) {
		console.log(contacts);
		let newContacts = [...contacts];
		let contactToReplace = newContacts.find((contact) => contact.id === contactId);
		contactToReplace[fieldId] = newText;
		console.log(newContacts);
		onUpdateContacts("contacts", newContacts);
	}

	return (
		<ul className="contacts-list">
			{contacts.map((contact) => {
				return (
					//<li ref={contact.id}>
					<li>
						<Contact 
							contact={contact}
							onUpdateContact={handleUpdateContact}
						/>
					</li>
				);
			})}
		</ul>
	);
};