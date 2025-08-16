import { createRequestHandler } from "@react-router/express";
import express from "express";
import { unstable_RouterContextProvider } from "react-router";
import { sessionContext } from "~/context/session";

export const app = express();
function getLoadContext() {
	const context = new unstable_RouterContextProvider();

	context.set(sessionContext, { user: null });

	return context;
}

app.use(
	createRequestHandler({
		build: () => import("virtual:react-router/server-build"),
		getLoadContext,
	}),
);
