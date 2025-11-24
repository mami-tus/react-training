import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { routeTree } from "./routeTree.gen";

// Router インスタンス作成
const router = createRouter({ routeTree });

// 型拡張
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

// root の複数生成を避けるための公式推奨パターン
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>,
	);
}
