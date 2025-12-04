import { useState } from "react";

function MyButton() {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}

	return (
		<button type="button" onClick={handleClick}>
			Clicked {count} times
		</button>
	);
}

export function UpdatingTheScreen() {
	return (
		<div>
			<h1>Counters that update separately</h1>
			<MyButton />
			<MyButton />
		</div>
	);
}
