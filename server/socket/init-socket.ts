import type http from "node:http";
import { Server } from "socket.io";
export function initializeSocketServer(server: http.Server) {
	try {
		const io = new Server(server, {
			cors: {
				origin: "http://localhost:5173",
				methods: ["GET", "POST"],
			},
		});

		io.on("connection", (socket) => {
			console.log(`Client connected: ${socket.id}`);

			socket.on("start-stream", (prompt) => {
				const fullMessage = `Server is streaming response for: ${prompt}`;
				let index = 0;

				const interval = setInterval(() => {
					if (index >= fullMessage.length) {
						socket.emit("stream-end");
						clearInterval(interval);
						return;
					}

					// emit one character at a time
					socket.emit("stream-chunk", fullMessage[index]);
					index++;
				}, 100);
			});

			socket.emit("welcome", { message: "Hello from server!" });

			socket.on("message", (data) => {
				console.log("Received:", data);
				socket.emit("echo", { message: data });
			});

			socket.on("disconnect", () => {
				console.log(`Client disconnected: ${socket.id}`);
			});
		});

		return io;
	} catch (error) {
		console.error("Failed to initialize Socket.IO server", error);
		throw error;
	}
}
