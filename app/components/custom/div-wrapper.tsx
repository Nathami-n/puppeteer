import type { ComponentProps, PropsWithChildren } from "react";
import { cn } from "~/lib/utils";

export function DivWrapper({
  children,
  className,
  ...props
}: PropsWithChildren<ComponentProps<"div">>) {
  return (
    <div {...props} className={cn("p-2 md:p-4", className)}>
      {children}
    </div>
  );
}
