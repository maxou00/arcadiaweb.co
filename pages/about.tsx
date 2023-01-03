import { Container } from "../src/components/Container";
import { Appbar } from "../src/components/Navigation/Appbar";
import { Text } from "../src/components/Text";
import YourTrustedPartner from "../src/sections/about/YourTrustedPartner";
import { CtaSomethingCool } from "../src/sections/home/ctas/CtaSomethingCool";
import { OurFunFact } from "../src/sections/home/OurFunFact";
import { OurTeam } from "../src/sections/home/Team";
import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <div className={styles.base}>
      <Appbar />
      <div className={styles.heading}>
        <Text variant="title">About Us</Text>
      </div>
      <div className={styles.body}>
        <Container className={styles.body_container}>
          <YourTrustedPartner />
          <OurFunFact transform={false} />
          <OurTeam />
          <CtaSomethingCool />
        </Container>
      </div>
    </div>
  );
}
