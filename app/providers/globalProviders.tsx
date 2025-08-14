import type { PropsWithChildren } from "react";
import { Toaster } from "sonner";

export const GlobalContextProviderComponent = ({
  children,
}: PropsWithChildren) => {
  return (
    <div>
      <Toaster richColors />
      {children}
    </div>
  );
};
