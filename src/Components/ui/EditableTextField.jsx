import { useState } from "react";
import Select from "react-select";

import TickIcon from "./TickIcon.jsx";

export default function EditableTextField({value, fieldId, onUpdateField, classNames, type}) {
	const [isEditingText, setIsEdtitingText] = useState(false);
	const [currentText, setCurrentText] = useState(value);

	const usePlaceHolderText = !currentText;

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
						className={"editable-field "+(type || "input ")+(classNames || "")+(usePlaceHolderText ? " placeholder-text" : "")}
					>{currentText || "Click to enter"}</p>
			}
			{
				isEditingText &&
					(
						type === "paragraph" ?
							<textarea 
								className={"editable-field editing "+(type || "input ")+(classNames || "")}
								rows={4}
								cols={50}
								value={currentText}
								onChange={() => handleUpdateText(event)}
							/> :
							<input
								value={currentText}
								onChange={() => handleUpdateText(event)}
								onKeyPress={(e) => handleKeyPress(e)}
								className={"editable-field editing "+(type || "input ")+(classNames || "")}
							/>
					)
			}
			{
				isEditingText &&
					<TickIcon onClick={handleSaveText} />
			}
		</>
	);
}