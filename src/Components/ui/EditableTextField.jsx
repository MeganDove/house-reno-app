import { useState } from "react";
import Select from "react-select";

import TickIcon from "./TickIcon.jsx";

export default function EditableTextField({value, fieldId, onUpdateField, classNames}) {
	const [isEditingText, setIsEdtitingText] = useState(false);
	const [currentText, setCurrentText] = useState(value);

	function handleEditText() {
		setIsEdtitingText(true);
	}

	function handleSaveText() {
		setIsEdtitingText(false);
		onUpdateField(fieldId, currentText);
	}

	function handleUpdateText(event) {
		setCurrentText(event.target.value);
	}

	function handleKeyPress(e) {
		const key = e.key;
		if(key === "Enter") {
			handleSaveText();
		}
	}

	return (
		<>
			{
				!isEditingText &&
					<p
						onClick={() => handleEditText()}
						className={"editable-field "+classNames}
					>{currentText}</p>
			}
			{
				isEditingText &&
					<input
						value={currentText}
						onChange={() => handleUpdateText(event)}
						onKeyPress={(e) => handleKeyPress(e)}
						className={"editable-field editing "+classNames}
					/>
			}
			{
				isEditingText &&
					<TickIcon onClick={handleSaveText} />
			}
		</>
	);
}