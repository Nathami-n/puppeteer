import { unstable_createContext, unstable_RouterContextProvider, type unstable_MiddlewareFunction } from "react-router";


const sessionContext = unstable_createContext<{ user: string }>();

export const sessionMiddleware: unstable_MiddlewareFunction = async ({ request, context }, next) => {

    console.log("request params in the test session middleware", request.url);

    context.set(sessionContext, { user: "test user" });

    return await next();
}

export function getSession(context: unstable_RouterContextProvider) {
    return context.get(sessionContext);
}