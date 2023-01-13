import classNames from "classnames";
import { BtnRightArrow } from "../../../components/Buttons/BtnRightArrow";
import { Container } from "../../../components/Container";
import { ScrollToDown } from "../../../components/ScrollToDown";
import { Text } from "../../../components/Text";
import styles from "./index.module.scss";

export function Heading() {
  return (
    <>
      <div id="heading-01" className={styles.root_desktop}>
        <Container className={styles.main}>
          <Text variant="hero" className={styles.hero_title}>
            Creativity In <br /> Our Blood Line
          </Text>
          <div className={styles.hero_content}>
            <div className={styles.left}>
              <BtnRightArrow text="Get a quote" />
            </div>
            <div className={styles.right}>
              <Text variant="subtitle" className={styles.quote}>
                We deliver best problem solving solution for our client and
                provide finest finishing product in present and upcoming future.
              </Text>
            </div>
          </div>
          <div className={styles.bottom}>
            <ScrollToDown />
          </div>
        </Container>
        <div className={styles.socials}>
          <span className={classNames(styles.text, styles.follow_us)}>
            Follow Us
          </span>
          <span className={styles.divider__h}></span>
          <span className={classNames(styles.text, styles.social)}>
            LinkedIn
          </span>
          <span className={styles.divider__v}></span>
          <span className={classNames(styles.text, styles.social)}>
            Twitter
          </span>
        </div>
      </div>
      <div id="heading-02" className={styles.root_mobile}>
        <Container className={styles.main}>
          <Text variant="hero" className={styles.hero_title}>
            Creativity In <br /> Our Blood Line
          </Text>
          <Text variant="subtitle" className={styles.quote}>
            We deliver best problem solving solution for our client and provide
            finest finishing product in present and upcoming future.
          </Text>
          <BtnRightArrow text="Get a quote" />
          <div className={styles.bottom}>
            <ScrollToDown />
          </div>
        </Container>
      </div>
    </>
  );
}
