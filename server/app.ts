import { createRequestHandler } from "@react-router/express";
import express from "express";
import { unstable_RouterContextProvider } from "react-router";
import { sessionContext } from "~/context/session";
import { auth } from "~/lib/auth.server";

export const app = express();
function getLoadContext() {
	const context = new unstable_RouterContextProvider();

	context.set(sessionContext, { user: null });

	return context;
}

app.use("/testing", (req, res) => {
	const session = auth.api.getSession({
		headers: req.headers,
	});
  console.log("headers", req.headers);
  req.user = session.user;
	res.send({
		user: session,
	});
});

app.use(
	createRequestHandler({
		build: () => import("virtual:react-router/server-build"),
		getLoadContext,
	}),
);


