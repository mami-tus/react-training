import { CreatingAndNestingComponents } from "./components/CreatingAndNestingComponents";
import { WritingMarkupWithJsx } from "./components/WritingMarkupWithJsx";

export function QuickStartPage() {
	return (
		<div>
			<h1>Quick Start</h1>
			<br />
			{/* コンポーネントの作成とネスト */}
			<CreatingAndNestingComponents />
			<hr />
			<WritingMarkupWithJsx />
			{/* 他のセクションを追加していく */}
		</div>
	);
}
