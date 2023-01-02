import classNames from "classnames";
import { HTMLAttributes, Ref } from "react";
import styles from "./index.module.scss";

export function Container(
  {innerRef, ...props}: HTMLAttributes<HTMLDivElement> & { innerRef?: Ref<HTMLDivElement> }
) {
  return (
    <div {...props} ref={innerRef} className={classNames(styles.base, props.className || "")}>
      {props.children}
    </div>
  );
}
