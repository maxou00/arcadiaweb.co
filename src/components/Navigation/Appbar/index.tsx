import { Desktop, List } from "phosphor-react";
import { Container } from "../../Container";
import styles from "./index.module.scss";

function DesktopMenu() {
  return (
    <div data-variant="desktop" className={styles.menu}>
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
  );
}

export function Appbar() {
  return (
    <div className={styles.appbar}>
      <Container className={styles.content}>
        <h1 className={styles.heading}>ArcadiaWeb</h1>
        <DesktopMenu />
        <div className={styles.side_actions}>
          <button className={styles.hamburger}>
            <List size={32} />
          </button>
        </div>
      </Container>
    </div>
  );
}
