import { useEffect } from "react";

//TODO: Display board

export default function PinterestBoard({url}) {

	return (
		<a href={url}>
            {url}
        </a>
	);
}