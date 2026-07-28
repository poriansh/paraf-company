import { cn } from "@shared/lib/cn";
import type { HTMLAttributes } from "react";

function Skeleton({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): React.ReactElement {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };
