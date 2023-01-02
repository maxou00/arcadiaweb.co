import {
  FloatingFocusManager,
  FloatingOverlay,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import classNames from "classnames";
import { PropsWithChildren, useId } from "react";
import styles from "./index.module.scss";

interface Props extends PropsWithChildren<{}> {
  isOpen: boolean;
  onClose: () => any;
}

export default function NavigationDrawer(props: Props) {
  const floating = useFloating({
    open: props.isOpen,
    onOpenChange(open) {
      props.onClose();
    },
    placement: "right",
  });

  const click = useClick(floating.context);

  const dismiss = useDismiss(floating.context, {
    outsidePressEvent: "mousedown",
  });

  const role = useRole(floating.context);
  const interactions = useInteractions([click, dismiss, role]);

  const labelId = useId();
  const descriptionId = useId();

  return (
    <FloatingOverlay lockScroll className={classNames(styles.overlay, props.isOpen ? styles.open : styles.close)}>
      <FloatingFocusManager context={floating.context}>
        <div
          data-active={props.isOpen}
          ref={floating.floating}
          aria-labelledby={labelId}
          aria-describedby={descriptionId}
          {...interactions.getFloatingProps()}
          className={styles.content}
        >
          {props.children}
        </div>
      </FloatingFocusManager>
    </FloatingOverlay>
  );
}
