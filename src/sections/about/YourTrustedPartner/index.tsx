import { Text } from "../../../components/Text";
import styles from "./index.module.scss";

export default function YourTrustedPartner() {
  return (
    <div className={styles.root}>
      <div className={styles.root_heading}>
        <Text variant="section-announcer">About our agency</Text>
        <Text variant="title" className={styles.root_title}>
          Your trusted partner for business
        </Text>
        <Text variant="body">
          This is the main factor that sets us apart from our competition and
          allows us to deliver a specialist business consultancy service. Our
          team applies its wide-ranging experience to determining. Through our
          years of experience, we’ve also learned that while each channel.
        </Text>
      </div>
    </div>
  );
}
