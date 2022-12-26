import { BtnGetAQuote } from "../../components/Buttons/GetAQuote";
import { Appbar } from "../../components/Navigation/Appbar";
import { ScrollToDown } from "../../components/ScrollToDown";
import styles from "./index.module.scss";

export function Heading() {
  return (
    <div className={styles.root}>
      <Appbar />
      <div className={styles.content_section}>
        <div className={styles.main}>
          <h1 className={styles.hero_title}>
            Creativity In <br /> Our Blood Line
          </h1>
          <div className={styles.hero_content}>
            <div className={styles.left}>
              <BtnGetAQuote />
            </div>
            <div className={styles.right}>
              <p>
                We deliver best problem solving solution for our client and
                provide finest finishing product in present and upcoming future.
              </p>
            </div>
          </div>
          <div className={styles.bottom}>
            <ScrollToDown />
          </div>
        </div>
      </div>
    </div>
  );
}
