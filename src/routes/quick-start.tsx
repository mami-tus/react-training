import { createFileRoute } from "@tanstack/react-router";
import { QuickStartPage } from "../learn/01-quick-start/QuickStartPage";

export const Route = createFileRoute("/quick-start")({
	component: QuickStartPage,
});
