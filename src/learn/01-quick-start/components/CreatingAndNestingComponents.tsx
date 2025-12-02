function MyButton() {
	return <button type="button">I'm a button</button>;
}

function MyApp() {
	return (
		<div>
			<h1>Welcome to my app</h1>
			<MyButton />
		</div>
	);
}

export function CreatingAndNestingComponents() {
	return (
		<>
			<h2>コンポーネントの作成とネスト</h2>
			<MyApp />
		</>
	);
}
