import type { FC } from "react";
import styles from "./card.module.scss";

const Card: FC = ({ children }) => <div className={styles.root}>{children}</div>;

export { Card };
