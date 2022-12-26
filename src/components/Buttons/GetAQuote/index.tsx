import { BsArrowRight } from "react-icons/bs";
import styles from "./index.module.scss";

export function BtnGetAQuote() {
  return (
    <button className={styles.cta_quote}>
      <div className={styles.content}>
        <span className={styles.text}>Get a quote</span>
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
