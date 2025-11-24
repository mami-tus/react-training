import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/quick-start")({
	component: () => (
		<div>
			<h2>Quick Start</h2>
			<p>React ドキュメントの Quick Start を写経していく。</p>
		</div>
	),
});
