import { BsLinkedin } from "react-icons/bs";
import { FaLinkedin, FaSlack, FaTwitter, FaYoutube } from "react-icons/fa";
import { Container } from "../../components/Container";
import { InputNewsletter } from "../../components/Inputs/InputNewsletter";
import { Text } from "../../components/Text";
import styles from "./index.module.scss";

const services = [
  {
    name: "UI/UX Design",
  },
  {
    name: "WP Development",
  },
  {
    name: "Digital Marketing",
  },
  {
    name: "React Development",
  },
];

export function Footer() {
  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <div data-type="heading" className={styles.column}>
          <Text variant="title" className={styles.footer_title}>
            Arcadiaweb
          </Text>
          <Text variant="body">
            Welcome to arino sed ut perspiciae omunde omnis iste natus error
            sitort voluptatem accusantium.
          </Text>
          <div className={styles.social_row}>
            <button className={styles.social}>
              <FaLinkedin size={18}/>
            </button>
            <button className={styles.social}>
              <FaTwitter size={18}/>
            </button>
            <button className={styles.social}>
              <FaYoutube size={18}/>
            </button>
            <button className={styles.social}>
              <FaSlack size={18}/>
            </button>
          </div>
        </div>
        <div className={styles.column}>
          <Text variant="body" className={styles.footer_section_title}>
            Services
          </Text>
          {services.map((s) => {
            return (
              <Text key={s.name} variant="body" className={styles.service}>
                {s.name}
              </Text>
            );
          })}
        </div>
        <div className={styles.column}>
          <Text variant="body" className={styles.footer_section_title}>
            Contact us
          </Text>
          <Text variant="body" className={styles.contact_address}>
            55/53 Jay Path Apt. 908
          </Text>
          <Text variant="body" className={styles.contact_phone}>
            +44 454 7800 112
          </Text>
          <Text variant="body" className={styles.contact_email}>
            sbechtelar@example.net
          </Text>
        </div>
        <div className={styles.column}>
          <Text variant="body" className={styles.footer_section_title}>
            Subscribe
          </Text>
          <InputNewsletter />
          <Text variant="body">
            Welcome to arino sed ut perspiciae omunde omnis.
          </Text>
        </div>
        <div className={styles.copyright_area}>
          <Text variant="body">Copyright 2023 © Arcadia</Text>
          <div className={styles.copyright_links}>
            <a className={styles.copyright_link} href="/policy/terms-of-use">
              Terms of use
            </a>
            |
            <a className={styles.copyright_link} href="/policy/terms-of-use">
              Privacy policy
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
