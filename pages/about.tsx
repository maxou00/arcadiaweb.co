import { Appbar } from "../src/components/Navigation/Appbar";
import { Text } from "../src/components/Text";
import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <div className={styles.base}>
      <Appbar />
      <Text variant="title">About Us</Text>
    </div>
  );
}
