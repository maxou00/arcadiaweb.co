import { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import { useNodeRect } from "../../hooks/useNodeRect";
import styles from "./index.module.scss";

export function MouseTracker() {
  const circle = useNodeRect();
  const dot = useNodeRect();

  useEffect(() => {
    const listener = (ev: MouseEvent) => {
      if (circle.ref.current) {
        let node = circle.ref.current;
        let style = node.style;

        style.left = ev.clientX + "px";
        style.top = ev.clientY + "px";
      }

      if (dot.ref.current) {
        let node = dot.ref.current;
        let style = node.style;

        style.left = ev.clientX + "px";
        style.top = ev.clientY + "px";
      }
    };

    document.addEventListener("mousemove", listener);
    return () => {
      document.removeEventListener("mousemove", listener);
    };
  });

  return (
    <>
      <div
        ref={(el) => (circle.ref.current = el as any)}
        className={styles.circle}
      ></div>
      <div
        ref={(el) => (dot.ref.current = el as any)}
        className={styles.dot}
      ></div>
    </>
  );
}
