import { useState } from "react";

function Square({
	value,
	onSquareClick,
}: {
	value: string | null;
	onSquareClick: () => void;
}) {
	return (
		<button type="button" className="square" onClick={onSquareClick}>
			{value}
		</button>
	);
}

function Board({
	xIsNext,
	squares,
	onPlay,
}: {
	xIsNext: boolean;
	squares: (string | null)[];
	onPlay: (nextSquares: (string | null)[]) => void;
}) {
	function handleClick(i: number) {
		if (squares[i] || calculateWinner(squares)) {
			return;
		}
		const nextSquares = squares.slice();
		nextSquares[i] = xIsNext ? "X" : "O";
		onPlay(nextSquares);
	}

	const winner = calculateWinner(squares);
	const status =
		winner !== null
			? `Winner: ${winner}`
			: `Next player: ${xIsNext ? "X" : "O"}`;

	return (
		<>
			<div className="status">{status}</div>
			{/* 行をループ */}
			{Array.from({ length: 3 }).map((_, row) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: indexをkeyに使用しても問題ないため
				<div key={row} className="board-row">
					{/* 列をループ */}
					{Array.from({ length: 3 }).map((_, col) => {
						const index = row * 3 + col;
						return (
							<Square
								key={index}
								value={squares[index]}
								onSquareClick={() => handleClick(index)}
							/>
						);
					})}
				</div>
			))}
		</>
	);
}

export function Game() {
	const [history, setHistory] = useState<(string | null)[][]>([
		Array(9).fill(null),
	]);
	const [currentMove, setCurrentMove] = useState(0);
	const xIsNext = currentMove % 2 === 0;
	const currentSquares = history[currentMove];

	const [isAscending, setIsAscending] = useState(true);

	function handlePlay(nextSquares: (string | null)[]) {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	}

	function jumpTo(nextMove: number) {
		setCurrentMove(nextMove);
		// currentMove を変更する数値が偶数の場合は、xIsNext を true
	}

	const moveIndexes = Array.from({ length: history.length }, (_, i) => i);
	if (!isAscending) moveIndexes.reverse();

	const moves = moveIndexes.map((move) => {
		const isCurrent = move === currentMove;

		const label = move === 0 ? "Go to game start" : `Go to move #${move}`;

		const currentLabel =
			move === 0 ? "You are at game start" : `You are at move #${move}`;

		return (
			<li
				// biome-ignore lint/suspicious/noArrayIndexKey: indexをkeyに使用しても問題ないため
				key={move}
			>
				{isCurrent ? (
					currentLabel
				) : (
					<button type="button" onClick={() => jumpTo(move)}>
						{label}
					</button>
				)}
			</li>
		);
	});

	return (
		<div className="game">
			<div className="game-board">
				<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
			</div>
			<div className="game-info">
				<button type="button" onClick={() => setIsAscending((prev) => !prev)}>
					Sort: {isAscending ? "Ascending" : "Descending"}
				</button>

				<ol>{moves}</ol>
			</div>
		</div>
	);
}

function calculateWinner(squares: (string | null)[]) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}
