import styles from "./index.module.scss";

export function Appbar() {
  return (
    <div className={styles.appbar}>
      <div className={styles.content}>
        <h1 className={styles.heading}>ArcadiaWeb</h1>
        <div className={styles.menu}>
          <div className={styles.item}>
            <span className={styles.title}>Home</span>
          </div>
          <div className={styles.item}>
            <span className={styles.title}>About</span>
          </div>
          <div className={styles.item}>
            <span className={styles.title}>Services</span>
          </div>
          <div className={styles.item}>
            <span className={styles.title}>Portfolio</span>
          </div>
          <div className={styles.item}>
            <span className={styles.title}>Blog</span>
          </div>
        </div>
        <div className={styles.side_actions}></div>
      </div>
    </div>
  );
}
