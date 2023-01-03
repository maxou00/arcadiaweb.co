import classNames from "classnames";
import { Text } from "../../../components/Text";
import person from "../../../../assets/img/about_img_4.jpeg";
import styles from "./index.module.scss";

export default function WhyChooseUs() {
  return (
    <div className={styles.root}>
      <div className={styles.panel_img}>
        <img src={person.src} alt="" className={styles.img} />
        <div className={styles.overlay}></div>
      </div>
      <div className={classNames(styles.panel_text)}>
        <Text variant="section-announcer">Why choose us</Text>
        <Text variant="title" className={styles.title}>
          Highly experienced pepole with us
        </Text>
        <Text variant="body" className={styles.subtitle}>
          This is the main factor that sets us apart from our competition and
          allows us to deliver a specialist business consultancy service. Our
          team applies its wide-ranging experience to determining. Through our
          years of experience, we’ve also learned that while each channel.{" "}
          <br />
          This is the main factor that sets us apart from our competition and
          allows us to deliver a specialist business consultancy service. Our
          team applies its wide-ranging experience to determining.
        </Text>
        <div className="thin-section-trait"></div>
      </div>
    </div>
  );
}
