import classNames from "classnames";
import { HTMLAttributes } from "react";
import { useNavItem } from "../context";
import styles from "./index.module.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {

}

export default function NavItemSurface(props: Props) {
  const {floating, ...navItem} = useNavItem();

  return (
    <div
      data-active={navItem.active}
      data-expanded={navItem.surfaceExpanded || false}
      className={classNames(styles.surface, props.className || "")}
      ref={floating.floating}
      style={{
        ...props.style,
        position: floating.strategy,
        top: floating.y ?? "0",
        left: floating.x ?? "0",
        width: "max-content"
      }}
    >
      {props.children}
    </div>
  );
}
