import type * as React from "react";

import { cn } from "~/lib/utils";

function Input({
  className,
  type,
  error,
  ...props
}: React.PropsWithChildren<
  React.ComponentProps<"input"> & { error?: boolean }
>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent  px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className,
        {
          "border-destructive aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40":
            error,
        }
      )}
      {...props}
    />
  );
}

function InputError({
  className,
  children,
  ...props
}: React.PropsWithChildren<React.ComponentProps<"div">>) {
  return (
    <div
      className={cn(
        "mt-0 w-full text-left text-destructive text-sm",
        className
      )}
      {...props}
      role="alert"
    >
      {children}
    </div>
  );
}

function InputField({
  children,
  className,
  ...rest
}: React.PropsWithChildren<React.ComponentProps<"div">>) {
  return (
    <div className={cn("flex w-full flex-col gap-1", className)} {...rest}>
      {children}
    </div>
  );
}

export { Input, InputError, InputField };
