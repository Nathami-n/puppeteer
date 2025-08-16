import { useEffect, useState } from "react";
import { DivWrapper } from "~/components/custom/div-wrapper";
import { useSocket } from "~/providers/socket-io-provider";

export default function DashboardIndex() {
  const { socket } = useSocket();
  const [text, setText] = useState("");
  const [prompt, setPrompt] = useState("");

  const startStream = () => {
    setText("");
    if (!socket) return;
    socket.emit("start-stream", prompt);
  };
  
  useEffect(() => {
    socket?.on("welcome", (data) => {
      console.log("Received:", data);
      socket.emit("echo", { message: data });
    });

    socket?.on("stream-chunk", (chunk: string) => {
      setText((prev) => prev + chunk);
    });

    const interval = setInterval(() => {
      const message = Math.floor(Math.random() * 100);
      socket?.emit("message", { message });
    }, 1000);

    return () => clearInterval(interval);
  }, [socket]);

  return (
    <DivWrapper>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a prompt..."
      />
      <button onClick={startStream}>Start Streaming</button>
      <div style={{ whiteSpace: "pre-wrap", marginTop: "1rem" }}>{text}</div>
    </DivWrapper>
  );
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
