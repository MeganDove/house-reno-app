import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import "../../Styles/Icons.css";

export default function TickIcon({onClick}) {
	return (
		<button
			id="tick-icon"
			onClick={onClick}
		><FontAwesomeIcon icon={faCheck} /></button>
	);
};