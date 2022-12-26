import { HTMLAttributes } from "react";
import { BsArrowRight } from "react-icons/bs";
import styles from "./index.module.scss";

interface Props {
  text: string;
}

export function BtnRightArrow({ text, ...buttonProps }: Props & HTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.cta_quote} {...buttonProps}>
      <div className={styles.content}>
        <span className={styles.text}>{text}</span>
        <span className={styles.line}></span>
      </div>
      <BsArrowRight
        className={styles.icon}
        size={24}
        fill="currentColor"
        fontWeight="bold"
      />
    </button>
  );
}
