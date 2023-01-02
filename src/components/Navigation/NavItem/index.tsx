import { FloatingFocusManager, useFloating } from "@floating-ui/react";
import classNames from "classnames";
import { CaretDown } from "phosphor-react";
import { HTMLAttributes, RefObject, useEffect, useId, useState } from "react";
import { ProvideNavItemContext } from "./context";
import styles from "./index.module.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {
  href?: string;
  withSurface?: boolean;
  surfaceExpanded?: boolean;
  anchor?: HTMLDivElement | undefined;
}

export default function NavItem(props: Props) {
  const [active, setActive] = useState(false);

  const id = useId();

  const floating = useFloating({
    nodeId: `navitem-${id}`,
    open: active,
    onOpenChange(open) {
      setActive(open);
    },
    placement: "bottom-start",
  });

  useEffect(() => {
    if (props.withSurface && props.surfaceExpanded && props.anchor) {
      floating.reference(props.anchor);
    }
  }, [props.withSurface, props.surfaceExpanded, props.anchor]);

  return (
    <div
      onMouseOver={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={classNames(styles.item, props.className || "")}
      ref={props.surfaceExpanded ? undefined : floating.reference}
    >
      <FloatingFocusManager modal={false} context={floating.context}>
        <ProvideNavItemContext
          value={{
            active,
            surfaceExpanded: props.surfaceExpanded,
            expansionAnchor: props.anchor,
            floating,
          }}
        >
          {props.children}
          {props.withSurface && <CaretDown size={18} />}
        </ProvideNavItemContext>
      </FloatingFocusManager>
    </div>
  );
}
