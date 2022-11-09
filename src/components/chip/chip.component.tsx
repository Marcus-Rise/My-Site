import styles from "./chip.module.scss";
import type { FC, PropsWithChildren } from "react";
import classNames from "classnames";

enum ChipSizeEnum {
  big,
}

type ChipProps = PropsWithChildren<{
  size?: ChipSizeEnum;
  className?: string;
}>;

const Chip: FC<ChipProps> = ({ size, className, ...props }) => (
  <span
    {...props}
    className={classNames(styles.chip, className)}
    style={{
      fontSize: size === ChipSizeEnum.big ? "0.85rem" : "0.8rem",
    }}
  />
);

export { Chip, ChipSizeEnum };
