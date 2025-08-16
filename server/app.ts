import { createRequestHandler } from "@react-router/express";
import express from "express";
import http from "node:http";
import { unstable_RouterContextProvider } from "react-router";
import { sessionContext } from "~/context/session";
import { initializeSocketServer } from "./socket/init-socket";

const app = express();
function getLoadContext() {
	const context = new unstable_RouterContextProvider();

	context.set(sessionContext, { user: null });

	return context;
}
const server = http.createServer(app);

initializeSocketServer(server);

app.use(
	createRequestHandler({
		build: () => import("virtual:react-router/server-build"),
		getLoadContext,
	}),
);

export { app, server };
