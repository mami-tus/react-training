function MyButton() {
	function handleClick() {
		alert("You clicked me!");
	}

	return (
		<button type="button" onClick={handleClick}>
			Click me
		</button>
	);
}

export function RespondingToEvents() {
	return (
		<>
			<h2>イベントに応答する</h2>
			<MyButton />
		</>
	);
}
