import { BtnRightArrow } from "../../../components/Buttons/BtnRightArrow";
import { Container } from "../../../components/Container";
import { Appbar } from "../../../components/Navigation/Appbar";
import { ScrollToDown } from "../../../components/ScrollToDown";
import { Text } from "../../../components/Text";
import styles from "./index.module.scss";

export function Heading() {
  return (
    <div id="heading" className={styles.root}>
      <Appbar />
      <div className={styles.content_section}>
        <Container className={styles.main}>
          <Text variant="hero" className={styles.hero_title}>
            Creativity In <br /> Our Blood Line
          </Text>
          <div className={styles.hero_content}>
            <div className={styles.left}>
              <BtnRightArrow text="Get a quote" />
            </div>
            <div className={styles.right}>
              <Text variant="subtitle">
                We deliver best problem solving solution for our client and
                provide finest finishing product in present and upcoming future.
              </Text>
            </div>
          </div>
          <div className={styles.bottom}>
            <ScrollToDown />
          </div>
        </Container>
      </div>
    </div>
  );
}
