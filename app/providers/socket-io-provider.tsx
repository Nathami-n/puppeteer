import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";
import type { Socket } from "socket.io-client";
import { getSocket } from "~/config/socket/init";

type SocketContextType = {
	socket: null | Socket;
};

const SocketContext = createContext<SocketContextType>({
	socket: null,
});

export function SocketProvider({ children }: { children: ReactNode }) {
	const [socket, setSocket] = useState<Socket | null>(null);

	useEffect(() => {
		const socket = getSocket();
		setSocket(socket);
	}, []);
	return (
		<SocketContext.Provider value={{ socket }}>
			{children}
		</SocketContext.Provider>
	);
}

export const useSocket = () => {
	if (!SocketContext) {
		throw new Error("useSocket must be used within a SocketProvider");
	}

	return useContext(SocketContext);
};
