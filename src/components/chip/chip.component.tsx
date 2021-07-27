import type { FC } from "react";
import styles from "./chip.module.scss";
import classNames from "classnames";

enum ChipSizeEnum {
  default,
  big,
}

interface IChipProps {
  size?: ChipSizeEnum;
  className?: string;
}

const Chip: FC<IChipProps> = ({ className, size = ChipSizeEnum.default, children }) => (
  <span
    className={classNames(styles.root, className, {
      [styles.default]: size === ChipSizeEnum.default,
      [styles.big]: size === ChipSizeEnum.big,
    })}
  >
    {children}
  </span>
);

export { Chip, ChipSizeEnum };
