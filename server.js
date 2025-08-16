import compression from "compression";
import express from "express";
import morgan from "morgan";

import "dotenv/config";


const BUILD_PATH = "./build/server/index.js";
const DEVELOPMENT = process.env.NODE_ENV === "development";

const PORT = Number.parseInt(process.env.PORT || "5173");

let app, server;


if (DEVELOPMENT) {
    const viteDevServer = await import("vite").then((vite) =>
        vite.createServer({
            server: {
                middlewareMode: true
            }
        }));

    const tsApp = await viteDevServer.ssrLoadModule("./server/app.ts");
    app = tsApp.app;
    server = tsApp.server;

    app.use(viteDevServer.middlewares);

    app.use(async (req, res, next) => {
        try {
            return await tsApp.app(req, res, next);
        } catch (error) {
            if (typeof error === "object" && error instanceof Error) {
                viteDevServer.ssrFixStacktrace(error);
            }
            next(error);
        }
    });
} else {

    const mod = await import(BUILD_PATH);
    app = mod.app;

    server = mod.server;

    app.use("/assets", express.static("build/client/assets", { maxAge: "1h" }));
    app.use(morgan("tiny"));

    app.use(express.static("build/client", { maxAge: "1h" }));

}



app.use(compression());
app.disable("x-powered-by");

server.listen(PORT, () => {
    console.log(`Server + SOCKET.IO is running on http://localhost:${PORT}`);
});