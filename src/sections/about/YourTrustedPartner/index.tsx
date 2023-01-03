import { Text } from "../../../components/Text";
import aboutImg1 from "../../../../assets/img/about_img_1.jpeg";
import aboutImg2 from "../../../../assets/img/about_img_2.jpeg";
import aboutImg3 from "../../../../assets/img/about_img_3.jpeg";
import styles from "./index.module.scss";
import classNames from "classnames";

export default function YourTrustedPartner() {
  return (
    <div className={styles.root}>
      <div className={classNames(styles.cell1, styles.root_heading)}>
        <Text variant="section-announcer">About our agency</Text>
        <Text variant="title" className={styles.root_heading_title}>
          Your trusted partner for business
        </Text>
        <Text variant="body" className={styles.root_heading_subtitle}>
          This is the main factor that sets us apart from our competition and
          allows us to deliver a specialist business consultancy service. Our
          team applies its wide-ranging experience to determining. Through our
          years of experience, we’ve also learned that while each channel.
        </Text>
      </div>
      <div className={styles.cell2}>
        <img src={aboutImg1.src} alt="" className={styles.img} />
      </div>
      <div className={styles.cell3}>
        <img src={aboutImg2.src} alt="" className={styles.img} />
      </div>
      <div className={styles.cell4}>
        <img src={aboutImg3.src} alt="" className={styles.img} />
      </div>
    </div>
  );
}
