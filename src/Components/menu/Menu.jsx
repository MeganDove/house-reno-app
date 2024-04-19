import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import "../../Styles/Menu.css";

export default function Menu() {
	const dispatch = useDispatch();

	return (
		<aside className="menu">
			<NavLink to="/tasks" className={({isActive}) => isActive ? "nav-button active" : "nav-button"} end>Tasks</NavLink>
			<NavLink to="/rooms" className={({isActive}) => isActive ? "nav-button active" : "nav-button"} end>Room designs</NavLink>
			<NavLink to="/funds" className={({isActive}) => isActive ? "nav-button active" : "nav-button"} end>Funds</NavLink>
		</aside>
	);
}