import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function BinIcon({onClick}) {
	return (
		<button
			id="bin-icon"
			onClick={onClick}
		><FontAwesomeIcon icon={faTrash} /></button>
	);
};