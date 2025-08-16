import { io, type Socket } from "socket.io-client";

let socket: Socket | null = null;

export function getSocket() {
	if (typeof window === "undefined") return null;

	if (!socket) {
		socket = io();
	}

	return socket;
}
