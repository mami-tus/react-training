import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: () => (
		<div>
			<h1>ホーム</h1>
			<p>Reactを学ぶ</p>
		</div>
	),
});
