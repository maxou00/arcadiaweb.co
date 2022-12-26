import styles from "./index.module.scss";

export function ScrollToDown() {
  return (
    <div className={styles.root}>
      <span className={styles.dot}></span>
    </div>
  );
}
