import { useDispatch } from "react-redux";

import { pageStateActions } from "../../store/pageState.js";

export default function Menu() {
	const dispatch = useDispatch();

	function handleChangePage(page) {
   		dispatch(pageStateActions.setCurrentPage(page));
  	}

	return (
		<aside className="menu">
			<button onClick={() => handleChangePage("tasks")}>Tasks</button>
			<button onClick={() => handleChangePage("rooms")}>Room designs</button>
			<button onClick={() => handleChangePage("funds")}>Funds</button>
		</aside>
	);
}