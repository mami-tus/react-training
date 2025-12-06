import { createFileRoute } from "@tanstack/react-router";
import { TutorialTicTacToePage } from "../learn/02-tutorial-tic-tac-toe/TutorialTicTacToePage";

export const Route = createFileRoute("/tutorial-tic-tac-toe")({
	component: TutorialTicTacToePage,
});
