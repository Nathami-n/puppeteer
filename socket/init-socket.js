import { Server } from "socket.io";

export function initializeSocketServer(server) {
	try {
		const io = new Server(server, {
			cors: {
				origin: "http://localhost:5173",
				methods: ["GET", "POST"],
			},
		});
        
		io.on("connection", (socket) => {
			console.log(`Client connected: ${socket.id}`);

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
