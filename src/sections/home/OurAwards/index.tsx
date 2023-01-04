import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

import classNames from "classnames";
import { useCallback, useRef } from "react";
import {
  BtnCarouselNext,
  BtnCarouselPrev,
} from "../../../components/Buttons/BtnCarouselArrows";
import { Container } from "../../../components/Container";
import { Text } from "../../../components/Text";
import styles from "./index.module.scss";

const awardGroup = [
  [
    {
      year: "2019",
      award: "Google Awards",
      description: `
          Website of the day<br/>
          Mobile excellence.
          `,
    },
    {
      year: "2020",
      award: "New technology innovation",
      description: `
          Honorable mention<br/>
          Desktop excellence.
          `,
    },
  ],
  [
    {
      year: "2021",
      award: "CSS award design",
      description: `
        Honorable mention<br/>
        Desktop excellence.
        `,
    },
    {
      year: "2022",
      award: "UI/UX design of the month",
      description: `
        website of the day<br/>
        Mobile excellence.
        `,
    },
  ],
];

export default function OurAwards() {
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
          <Text variant="section-announcer">Our Awards</Text>
          <div className={styles.header_row}>
            <Text variant="title" className={styles.title}>
              We get multiple awards
            </Text>
            <div className={styles.carousel_btns}>
              <BtnCarouselPrev onClick={onPrev} />
              <BtnCarouselNext onClick={onNext} />
            </div>
          </div>
        </div>
        <div className={styles.awards}>
          <Flicking
            circular={true}
            renderOnlyVisible
            align="prev"
            ref={(el) => {
              ref.current = el as any;
            }}
          >
            {awardGroup.map((p, i) => {
              return (
                <div
                  key={i}
                  className={classNames("flicking-panel", styles.award_slide)}
                >
                  {p.map((award, i) => {
                    return (
                      <div
                        key={award.award + i}
                        className={styles.award_wrapper}
                      >
                        <div className={styles.award}>
                          <Text variant="body" className={styles.award_year}>
                            {award.year}
                          </Text>
                          <Text variant="body" className={styles.award_title}>
                            {award.award}
                          </Text>
                          <Text
                            variant="body"
                            className={styles.award_description}
                            dangerouslySetInnerHTML={{
                              __html: award.description,
                            }}
                          ></Text>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </Flicking>
        </div>
      </Container>
    </div>
  );
}
