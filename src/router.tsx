// src/router.tsx
import {
	createRootRoute,
	createRoute,
	createRouter,
	Outlet,
} from "@tanstack/react-router";
import QuickStartPage from "./learn/01-quick-start/QuickStartPage";

// アプリ全体の「共通レイアウト」になるルート
const rootRoute = createRootRoute({
	component: () => (
		<div style={{ padding: 20 }}>
			<h1>React Learn Playground</h1>
			<nav style={{ marginBottom: 16 }}>
				<a href="/quick-start">Quick Start</a>
				{/* ここに他の章へのリンクを足していく */}
			</nav>
			<hr />
			<Outlet />
		</div>
	),
});

// /quick-start 用のページルート
const quickStartRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/quick-start",
	component: QuickStartPage,
});

// ルートツリーを組み立てて Router を作成
const routeTree = rootRoute.addChildren([quickStartRoute]);

export const router = createRouter({ routeTree });

// 型補完のためのモジュール拡張
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
