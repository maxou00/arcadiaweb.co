import { Text } from "../../components/Text";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

import styles from "./index.module.scss";
import member1 from "../../../assets/img/member_1.jpeg";
import member2 from "../../../assets/img/member_2.jpeg";
import member3 from "../../../assets/img/member_3.jpeg";
import member4 from "../../../assets/img/member_4.jpeg";

import { useCallback, useRef, useState } from "react";
import classNames from "classnames";
import { Container } from "../../components/Container";
import {
  BtnCarouselNext,
  BtnCarouselPrev,
} from "../../components/Buttons/BtnCarouselArrows";

const teamMembers = [
  {
    img: member1.src,
    name: "Kevin Valfin",
    role: "CEO",
  },
  {
    img: member2.src,
    name: "Yannel Dedegbe",
    role: "Senior Engineer",
  },
  {
    img: member3.src,
    name: "Gael HGBD",
    role: "Software Developer",
  },
  {
    img: member4.src,
    name: "Heccath Zohoun",
    role: "Software Developer",
  },
  {
    img: member1.src,
    name: "Jules Cesar",
    role: "Graphic Designer",
  },
  {
    img: member3.src,
    name: "Othniel Mathias",
    role: "UI/UX Designer",
  },
];

export function OurTeam() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const ref = useRef<Flicking | undefined>();

  const onPrev = useCallback(() => {
    if (ref.current) {
      ref.current.prev();
    }
  }, []);

  const onNext = useCallback(() => {
    if (ref.current) {
      ref.current.next();
    }
  }, []);

  return (
    <div className={styles.root}>
      <Container className={styles.root_content}>
        <div className={styles.heading}>
          <Text variant="section-announcer">Our Team</Text>
          <div className={styles.header_row}>
            <Text variant="title" className={styles.title}>
              Awesome team members
            </Text>
            <div className={styles.carousel_btns}>
              <BtnCarouselPrev onClick={onPrev} />
              <BtnCarouselNext onClick={onNext} />
            </div>
          </div>
        </div>
        <div className={styles.members}>
          <Flicking
            circular
            renderOnlyVisible
            onChanged={(ev) => {
              setSelectedIndex(ev.index);
            }}
            ref={(el) => {
              ref.current = el as any;
            }}
          >
            {teamMembers.map((p, i) => {
              return (
                <div
                  key={p.name}
                  className={classNames(
                    "flicking-panel",
                    styles.member_wrapper
                  )}
                  data-selected={selectedIndex === i}
                >
                  <div
                    data-selected={selectedIndex === i}
                    className={styles.member}
                  >
                    <img className={styles.img} src={p.img} alt={p.name} />
                    <div className={styles.overlay}>
                      <div className={styles.overlay_content}>
                        <div className={styles.name_content}>
                          <Text variant="body" className={styles.name}>
                            {p.name}
                          </Text>
                          <Text variant="body" className={styles.see_details}>
                            {p.role}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Flicking>
          <div className={styles.indicators}>
            {teamMembers.map((p, index) => {
              return (
                <span
                  key={p.name}
                  data-selected={selectedIndex === index}
                  className={styles.indicator}
                >
                  <span className={styles.dot}></span>
                </span>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
