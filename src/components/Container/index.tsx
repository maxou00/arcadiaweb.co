import classNames from "classnames";
import { HTMLAttributes } from "react";
import styles from "./index.module.scss";

export function Container(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={classNames(styles.base, props.className || "")}>
      {props.children}
    </div>
  );
}
