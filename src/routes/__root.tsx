// src/routes/__root.tsx

/**
 * 全ページ共通レイアウト（ファイルベースルーティングの root）
 * - <Outlet /> に子ルートが表示される
 * - Devtools を全ページで使える
 */
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
	component: () => (
		<div style={{ padding: 20 }}>
			<h1>Learn React</h1>

			{/* 共通ナビゲーション */}
			<nav style={{ marginBottom: 16, display: "flex", gap: 8 }}>
				<Link to="/">ホーム</Link>
				<Link to="/quick-start">クイックスタート</Link>
				<Link to="/tutorial-tic-tac-toe">チュートリアル：三目並べ</Link>
			</nav>

			<hr />

			{/* 子ルートがここに差し込まれる */}
			<Outlet />

			{/* ルートの状態確認ツール（開発時用） */}
			<TanStackRouterDevtools />
		</div>
	),
});
