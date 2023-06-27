import styles from "./chip.module.scss";
import type { FC, HTMLProps } from "react";
import classNames from "classnames";

type ChipProps = HTMLProps<HTMLSpanElement> & {
  className?: string;
};

const Chip: FC<ChipProps> = ({ className, ...props }) => (
  <span {...props} className={classNames(styles.chip, className)} />
);

export { Chip };
