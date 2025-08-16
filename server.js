import compression from "compression";
import express from "express";
import morgan from "morgan";
import http from "node:http";
import "dotenv/config";

const BUILD_PATH = "./build/server/index.js";
const DEVELOPMENT = process.env.NODE_ENV === "development";
const PORT = Number.parseInt(process.env.PORT || "5173");

let app, server;

if (DEVELOPMENT) {
    console.log("Starting development server...");

    const vite = await import("vite");
    const viteDevServer = await vite.createServer({
        server: {
            middlewareMode: true,
            hmr: { port: 5174 }
        },
        appType: 'custom'
    });

    app = express();

    server = http.createServer(app);


    const tsAppModule = await viteDevServer.ssrLoadModule("./server/app.ts");


    if (tsAppModule.initializeSocketServer) {
        tsAppModule.initializeSocketServer(server);
    }

    app.use(viteDevServer.middlewares);

    app.use((req, res, next) => {

        if (
            req.url.startsWith('/@') ||
            req.url.startsWith('/node_modules') ||
            req.url.includes('.tsx') ||
            req.url.includes('.ts') ||
            req.url.includes('__vite') ||
            req.url.includes('virtual:') ||
            req.url.startsWith('/src/')
        ) {
            return next();
        }

        if (tsAppModule.getReactRouterHandler) {
            return tsAppModule.getReactRouterHandler()(req, res, next);
        }

        next();
    });

} else {
    console.log("Starting production server...");
    const mod = await import(BUILD_PATH);
    app = mod.app;
    server = http.createServer(app);

    if (mod.initializeSocketServer) {
        mod.initializeSocketServer(server);
    }
    app.use(compression());
    app.use(morgan("tiny"));

    app.use("/assets", express.static("build/client/assets", {
        maxAge: "1y",
        immutable: true
    }));
    app.use(express.static("build/client", { maxAge: "1h" }));
}


app.disable("x-powered-by");



server.listen(PORT, () => {
    console.log(` Server + Socket.IO running on http://localhost:${PORT}`);
    console.log(`Mode: ${DEVELOPMENT ? 'development' : 'production'}`);
});