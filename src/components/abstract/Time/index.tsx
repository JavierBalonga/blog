import { cx } from "class-variance-authority";
import { ComponentProps } from "react";

export interface TimeProps
  extends Omit<ComponentProps<"time">, "dateTime" | "children"> {
  date?: string;
}

export default function Time({
  date: rawDate,
  className,
  ...props
}: TimeProps) {
  if (!rawDate) return null;

  const date = new Date(rawDate);

  return (
    <time
      className={cx(
        "text-sm text-zinc-500 border-l-2 border-zinc-500 px-3.5",
        className
      )}
      dateTime={date.toISOString().slice(0, 10)}
      {...props}
    >
      {date.toLocaleDateString("es-AR", { dateStyle: "long" })}
    </time>
  );
}
