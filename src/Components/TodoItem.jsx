import EditableTextField from "./ui/EditableTextField.jsx";

export default function Contact({item}) {
	const staticFieldClass = "md:text-l text-slate-200 rounded-lg border-solid border-4 border-transparent hover:border-amber-600 p-0.5";
	const editableFieldClass = "md:text-l text-slate-600 rounded-lg focus:border-solid focus:border-blue-400 p-0.5";

	return (
		<li key={item.id} className="p-2 mb-4">
			<EditableTextField 
				staticFieldClass={staticFieldClass}
			 	editableFieldClass={editableFieldClass}
			 	value={item.text}
			 	fieldId="todos"
			 	onUpdateField={() => {}}
			 />
		</li>
		
	);
};