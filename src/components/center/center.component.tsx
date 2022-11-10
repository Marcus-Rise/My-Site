import styles from "./center.module.scss";
import type { FC, PropsWithChildren } from "react";

enum CenterYAlign {
  CENTER = "center",
  AROUND = "space-around",
}

type CenterProps = PropsWithChildren<{
  wrapItems?: boolean;
  yAlign?: CenterYAlign;
}>;

const Center: FC<CenterProps> = ({ yAlign, wrapItems, ...props }) => (
  <div
    {...props}
    className={styles.center}
    style={{
      justifyContent: yAlign ?? CenterYAlign.CENTER,
      flexWrap: wrapItems ? "wrap" : "inherit",
    }}
  />
);

export { Center, CenterYAlign };
