import { CreatingAndNestingComponents } from "./components/CreatingAndNestingComponents";
import { DisplayingData } from "./components/DisplayingData";
import { RenderingLists } from "./components/RenderingLists";
import { WritingMarkupWithJsx } from "./components/WritingMarkupWithJsx";

export function QuickStartPage() {
	return (
		<div>
			<h1>Quick Start</h1>
			<br />
			{/* コンポーネントの作成とネスト */}
			<CreatingAndNestingComponents />

			<hr />
			{/* JSX でマークアップを書く */}
			<WritingMarkupWithJsx />

			<hr />
			{/* データの表示 */}
			<DisplayingData />

			<hr />
			{/* リストのレンダー */}
			<RenderingLists />
			{/* 他のセクションを追加していく */}
		</div>
	);
}
