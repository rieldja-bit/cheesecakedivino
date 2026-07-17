import { createFileRoute } from "@tanstack/react-router";
import { SalesPage } from "./index";

export const Route = createFileRoute("/cheescake-es")({
  component: SalesPage,
});