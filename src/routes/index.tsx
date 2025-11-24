import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: () => (
		<div>
			<h2>Home</h2>
			<p>React Learn のプレイグラウンド</p>
		</div>
	),
});
