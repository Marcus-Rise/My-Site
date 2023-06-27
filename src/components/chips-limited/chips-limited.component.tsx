"use client";

import type { FC, PropsWithChildren } from "react";
import { Children, useMemo, useState } from "react";
import { Chip } from "../chip";
import styles from "./chips-limited.module.scss";

type ChipsLimitedProps = PropsWithChildren<{
  limit: number;
}>;

const ChipsLimited: FC<ChipsLimitedProps> = ({ limit, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [limitedChildren, otherChildren] = useMemo(() => {
    const childrenArray = Children.toArray(children);

    return [childrenArray.slice(0, limit), childrenArray.slice(limit)];
  }, [children, limit]);

  const toggle = useMemo(
    () => (
      <Chip className={styles.toggle} onClick={() => setIsOpen((open) => !open)}>
        <b>{isOpen ? "Скрыть" : <>+{otherChildren.length}</>}</b>
      </Chip>
    ),
    [isOpen, otherChildren.length],
  );

  return (
    <>
      {limitedChildren}
      {isOpen && otherChildren}
      {toggle}
    </>
  );
};

export { ChipsLimited };
