import type { User } from "better-auth";
import type {
	unstable_MiddlewareFunction,
	unstable_RouterContextProvider,
} from "react-router";
import { href, redirect, unstable_createContext } from "react-router";
import { logger } from "~/config/logging/logger";
import { auth } from "~/lib/auth.server";

const sessionContext = unstable_createContext<{ user: User }>();

export const sessionMiddleware: unstable_MiddlewareFunction = async (
	{ request, context },
	next,
) => {
	logger.info(`processing request ${request.url} in the auth check middleware`);

	const data = await auth.api.getSession({
		headers: request.headers,
	});

	if (!data) {
		logger.warn(`No valid session for ${request.url}`);
		throw redirect(href("/sign-in"));
	}

	context.set(sessionContext, { user: data.user });

	return await next();
};

export function getSession(context: unstable_RouterContextProvider) {
	return context.get(sessionContext);
}
