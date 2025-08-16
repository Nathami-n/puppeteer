import type { PropsWithChildren } from "react";
import { Toaster } from "sonner";
import { SocketProvider } from "./socket-io-provider";

export const GlobalContextProviderComponent = ({
  children,
}: PropsWithChildren) => {
  return (
    <SocketProvider>
      <Toaster richColors />
      {children}
    </SocketProvider>
  );
};
