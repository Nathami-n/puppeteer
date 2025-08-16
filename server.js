import compression from "compression";
import express from "express";
import morgan from "morgan";
import http from "node:http";
import { initializeSocketServer } from "./socket/init-socket.js";



const BUILD_PATH = "./build/server/index.js";
const DEVELOPMENT = process.env.NODE_ENV === "development";

const PORT = Number.parseInt(process.env.PORT || "5173");

const app = express();


app.use(compression());
app.disable("x-powered-by");

if (DEVELOPMENT) {
    console.log("Starting development server");
    const viteDevServer = await import("vite").then((vite) =>
        vite.createServer({
            server: {
                middlewareMode: true
            }
        }));

    app.use(viteDevServer.middlewares);

    app.use(async (req, res, next) => {
        try {
            const source = await viteDevServer.ssrLoadModule("./server/app.ts");
            return await source.app(req, res, next);
        } catch (error) {
            if (typeof error === "object" && error instanceof Error) {
                viteDevServer.ssrFixStacktrace(error);
            }
            next(error);
        }
    });
} else {
    console.log("Starting production server");
    app.use("/assets", express.static("build/client/assets", { maxAge: "1h" }));
    app.use(morgan("tiny"));

    app.use(express.static("build/client", { maxAge: "1h" }));

    app.use(await import(BUILD_PATH).then((mod) => mod.app));
}


const server = http.createServer(app);

const io = initializeSocketServer(server);




server.listen(PORT, () => {
    console.log(`Server + SOCKET.IO is running on http://localhost:${PORT}`);
})