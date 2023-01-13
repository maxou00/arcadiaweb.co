import { useEffect, useId, useLayoutEffect, useMemo } from "react";
import { gsap } from "gsap";
import { nanoid } from "nanoid";
import { useNodeRect } from "../../../hooks/useNodeRect";
import styles from "./index.module.scss";

export function MarqueeSlide() {
  const nodeId = useMemo(() => {
    return nanoid();
  }, []);

  const contentId = `${nodeId}-content-1`;
  const contentCloneId = `${nodeId}-content-2`;

  const rootNode = useNodeRect();
  const contentNode = useNodeRect();
  const contentCloneNode = useNodeRect();

  useLayoutEffect(() => {
    let duration = 20;
    if (
      rootNode.ref.current &&
      contentNode.ref.current &&
      contentCloneNode.ref.current
    ) {
      let content = contentNode.ref.current;
      let clone = contentCloneNode.ref.current;
      let parentRect =
        contentNode.ref.current.parentElement?.getBoundingClientRect();
      let contentRect = content.getBoundingClientRect();
      let contentWidth = contentRect.width;

      const timeline = gsap
        .timeline({ repeat: -1, paused: false })
        .fromTo(content, { x: 0 }, { x: -contentWidth, duration, ease: "none" }, "<")
        .fromTo(clone, { x: contentWidth }, { x: 0, duration, ease: "none" }, "<")
        .progress(1)
        .progress(0);

      timeline.play();
    }
  }, [contentNode.client]);

  return (
    <div
      id={nodeId}
      ref={(el) => {
        rootNode.ref.current = el as any;
      }}
      className={styles.marquee}
      style={{
        height: (contentNode.client?.height ?? 0 ) + "px"
      }}
    >
      <div
        id={contentId}
        ref={(el) => {
          contentNode.ref.current = el as any;
        }}
        className={styles.marquee__content}
      >
        <p className={styles.text}>Our reputed partners worldwide</p>
      </div>
      <div
        id={contentCloneId}
        ref={(el) => {
          contentCloneNode.ref.current = el as any;
        }}
        className={styles.marquee__content}
        data-role="clone"
      >
        <p className={styles.text}>Our reputed partners worldwide</p>
      </div>
    </div>
  );
}
