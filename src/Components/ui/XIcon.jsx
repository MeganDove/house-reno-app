import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

import "../../Styles/Icons.css";

export default function XIcon({onClick}) {
	return (
		<button
			id="x-icon"
			onClick={onClick}
		><FontAwesomeIcon icon={faX} /></button>
	);
};