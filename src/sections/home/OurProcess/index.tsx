import { Play } from "phosphor-react";
import { Container } from "../../../components/Container";
import { Text } from "../../../components/Text";
import styles from "./index.module.scss";

export function OurProcess() {
  return (
    <div className={styles.root}>
      <Container className={styles.root_content}>
        <div className={styles.heading}>
          <Text variant="title" className={styles.title}>
            Our agile process is ability to adapt and respond to change. Agile
            organizations view change as an opportunity, not a threat.
          </Text>
        </div>
        <div className={styles.video_wrapper}>
          <div className={styles.video}></div>
          <div className={styles.overlay}>
            <button className={styles.play}>
              <div className={styles.glow}></div>
              <div className={styles.content}>
                <Play weight="fill" size={32} />
              </div>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
