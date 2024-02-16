import { useState } from "react";
import Select from "react-select";

export default function DropdownField({
	value,
	fieldId,
	onUpdateField,
	options
}) {
	const [currentText, setCurrentText] = useState(value);

	function handleUpdateSelect(selection) {
		setCurrentText(selection.value);
		onUpdateField(fieldId, selection.value);
	}

	function handleKeyPress(e) {
		const key = e.key;
		if(key === "Enter") {
			onUpdateField(fieldId, currentText);
		}
	}
 
	const currentOption = options.find((option) => currentText === option.value);
	const currentLabel = currentOption.label;

	return (
		<Select
			defaultValue={currentOption}
			options={options}
			onChange={(selection) => handleUpdateSelect(selection)}
			unstyled
			styles={{
		      input: (base) => ({
		        ...base,
		        "input:focus": {
		          boxShadow: "none",
		        },
		      }),
		      multiValueLabel: (base) => ({
		        ...base,
		        whiteSpace: "normal",
		        overflow: "visible",
		      }),
		      control: (base) => ({
		        ...base,
		        transition: "none",
		      }),
		    }}
			classNames="dropdown-field"

		/>
	);
}