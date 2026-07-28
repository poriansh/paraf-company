import {cn} from "@/shared/lib/cn";

interface ImagePlaceholderProps {
  className?: string;
  label?: string;
}

/** Blank slot for assets the user will drop in later. */
export function ImagePlaceholder({className, label}: ImagePlaceholderProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "shrink-0 rounded-2xl border border-dashed border-slate-300/80 bg-slate-100/60",
        className,
      )}
      title={label}
    />
  );
}
