import type { FC } from "react";
import styles from "./layout.module.scss";
import classNames from "classnames";

interface ILayoutProps {
  center?: boolean;
}

const Layout: FC<ILayoutProps> = ({ center, children }) => (
  <main
    className={classNames(styles.root, {
      [styles.center]: center,
    })}
  >
    {children}
  </main>
);

export { Layout };
