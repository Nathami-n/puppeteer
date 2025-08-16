import { useEffect } from "react";
import { DivWrapper } from "~/components/custom/div-wrapper";
import { useSocket } from "~/providers/socket-io-provider";

export default function DashboardIndex() {
  const { socket } = useSocket();

  useEffect(() => {
    socket?.on("welcome", (data) => {
      console.log("Received:", data);
      socket.emit("echo", { message: data });
    });

    const interval = setInterval(() => {
      const message = Math.floor(Math.random() * 100);
      socket?.emit("message", { message });
    }, 1000);

    return () => clearInterval(interval);
  }, [socket]);

  return <DivWrapper>Dash</DivWrapper>;
}

// function useTest(
//   { autoFetch = true }: { autoFetch?: boolean } = { autoFetch: true }
// ) {
//   const { query, ...rest } = useTypedFetcher<{ name: string }>();
//   const fetchedRef = useRef(false);

//   const fetchData = useCallback(() => {
//     if (!fetchedRef.current) {
//       fetchedRef.current = true;
//       query(`/api/test`);
//     }
//   }, [query]);

//   useEffect(() => {
//     if (autoFetch) {
//       fetchData();
//     }
//   }, [autoFetch, fetchData]);

//   return {
//     ...rest,
//     refetch: () => {
//       fetchedRef.current = false;
//       fetchData();
//     },
//   };
// }
