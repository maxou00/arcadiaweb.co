import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

import classNames from "classnames";
import { useCallback, useId, useRef } from "react";
import {
  BtnCarouselNext,
  BtnCarouselPrev,
} from "../../../components/Buttons/BtnCarouselArrows";
import { Container } from "../../../components/Container";
import { Text } from "../../../components/Text";
import { useNodeRect } from "../../../hooks/useNodeRect";
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

  const group1 = useId();
  const group2 = useId();
  const group3 = useId();
  const carouselWrapper = useNodeRect();
  const rootNode = useNodeRect();

  return (
    <div
      ref={(el) => (rootNode.ref.current = el as any)}
      className={styles.root}
    >
      <div
        className={styles.lost_triangle}
        style={{
          height: ((rootNode.client?.height ?? 0) * 2) / 1.9 + "px",
          width: ((rootNode.client?.height ?? 0) * 1) / 2 + "px",
        }}
      ></div>
      <Container className={styles.root_content}>
        <div className={styles.heading}>
          <Text variant="section-announcer">Our Awards</Text>
          <div className={styles.header_row}>
            <Text variant="title" className={styles.title}>
              We've got multiple awards
            </Text>
            <div className={styles.carousel_btns}>
              <BtnCarouselPrev onClick={onPrev} />
              <BtnCarouselNext onClick={onNext} />
            </div>
          </div>
        </div>
        <div
          ref={(el) => (carouselWrapper.ref.current = el as any)}
          className={styles.awards}
          style={
            {
              "--wrapper-width": (carouselWrapper.client?.width ?? 0) + "px",
              "--wrapper-height": (carouselWrapper.client?.height ?? 0) + "px",
            } as any
          }
        >
          {(carouselWrapper.client?.width ?? 0) > 0 &&
            (carouselWrapper.client?.height ?? 0) > 0 && (
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
                      key={`${group1}-${i}`}
                      className={classNames(
                        "flicking-panel",
                        styles.award_slide
                      )}
                    >
                      {p.map((award, j) => {
                        return (
                          <div
                            key={`${group1}-${i}-${award.award}-${j}`}
                            className={styles.award_wrapper}
                          >
                            <div className={styles.award}>
                              <Text
                                variant="body"
                                className={styles.award_year}
                              >
                                {award.year}
                              </Text>
                              <Text
                                variant="body"
                                className={styles.award_title}
                              >
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
                {awardGroup.map((p, i) => {
                  return (
                    <div
                      key={`${group2}-${i}`}
                      className={classNames(
                        "flicking-panel",
                        styles.award_slide
                      )}
                    >
                      {p.map((award, j) => {
                        return (
                          <div
                            key={`${group2}-${i}-${award.award}-${j}`}
                            className={styles.award_wrapper}
                          >
                            <div className={styles.award}>
                              <Text
                                variant="body"
                                className={styles.award_year}
                              >
                                {award.year}
                              </Text>
                              <Text
                                variant="body"
                                className={styles.award_title}
                              >
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
                {awardGroup.map((p, i) => {
                  return (
                    <div
                      key={`${group3}-${i}`}
                      className={classNames(
                        "flicking-panel",
                        styles.award_slide
                      )}
                    >
                      {p.map((award, j) => {
                        return (
                          <div
                            key={`${group3}-${i}-${award.award}-${j}`}
                            className={styles.award_wrapper}
                          >
                            <div className={styles.award}>
                              <Text
                                variant="body"
                                className={styles.award_year}
                              >
                                {award.year}
                              </Text>
                              <Text
                                variant="body"
                                className={styles.award_title}
                              >
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
            )}
        </div>
      </Container>
    </div>
  );
}
