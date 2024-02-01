import type { FC, HTMLProps } from "react";
import { clsx } from "clsx";

type ChipProps = HTMLProps<HTMLSpanElement> & {
  className?: string;
  flat?: boolean;
};

const Chip: FC<ChipProps> = ({ className, flat, ...props }) => (
  <span
    {...props}
    className={clsx(
      {
        "bg-secondary": !flat,
        "bg-background": flat,
      },
      "rounded-3xl py-2 px-3 text-sm",
      className,
    )}
  />
);

export { Chip };
