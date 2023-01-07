import { Container } from "../../components/Container";
import partner_1 from "../../../assets/img/partner_1.svg";
import partner_2 from "../../../assets/img/partner_2.svg";
import partner_3 from "../../../assets/img/partner_3.svg";
import partner_4 from "../../../assets/img/partner_4.svg";
import styles from "./index.module.scss";
import { MarqueeSlide } from "../home/MarqueeEffect";

const partners = [
  { img: partner_1.src },
  { img: partner_2.src },
  { img: partner_3.src },
  { img: partner_4.src },
  { img: partner_2.src },
];

export function Partners() {
  return (
    <div className={styles.root}>
      <MarqueeSlide />
      <Container className={styles.content}>
        {partners.map((p, i) => {
          return (
            <div key={i} className={styles.partner}>
              <img src={p.img} className={styles.img} />
            </div>
          );
        })}
      </Container>
    </div>
  );
}
