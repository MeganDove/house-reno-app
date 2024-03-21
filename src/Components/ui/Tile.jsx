import "../../Styles/Tile.css";

export default function Tile({children, highlight, ...props}) {
	let className = highlight ? "tile highlight" : "tile";
	return (
		<div className={className} {...props}>
			{children}
		</div>
	);
}