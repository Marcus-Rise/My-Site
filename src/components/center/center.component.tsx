import type { FC } from "react";
import styles from "./center.module.scss";
import classNames from "classnames";

interface ICenterProps {
  wrap?: boolean;
  splash?: boolean;
}

const Center: FC<ICenterProps> = ({ splash, wrap, children }) => (
  <div
    className={classNames(styles.root, {
      [styles.wrap]: wrap,
      [styles.splash]: splash,
    })}
  >
    {children}
  </div>
);

export { Center };
