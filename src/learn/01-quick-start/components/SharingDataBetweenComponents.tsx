import { useState } from "react";

function MyButton({ count, onClick }: { count: number; onClick: () => void }) {
	return (
		<button type="button" onClick={onClick}>
			Clicked {count} times
		</button>
	);
}

function MyApp() {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}
	return (
		<div>
			<h1>Counters that update separately</h1>
			<MyButton count={count} onClick={handleClick} />
			<MyButton count={count} onClick={handleClick} />
		</div>
	);
}

export function SharingDataBetweenComponents() {
	return (
		<div>
			<h1>コンポーネント間でデータを共有する</h1>
			<MyApp />
		</div>
	);
}
