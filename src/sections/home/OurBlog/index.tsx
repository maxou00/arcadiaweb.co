import { BtnRightArrow } from "../../../components/Buttons/BtnRightArrow";
import { Container } from "../../../components/Container";
import { Text } from "../../../components/Text";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

import styles from "./index.module.scss";
import serviceUiUxImg from "../../../../assets/img/service_1.jpeg";
import serviceReactImg from "../../../../assets/img/service_2.jpeg";
import serviceMarketingImg from "../../../../assets/img/service_3.jpeg";
import serviceTechImg from "../../../../assets/img/service_4.jpeg";
import classNames from "classnames";
import { useLayoutEffect, useRef, useState } from "react";
import { useId } from "../../../hooks/useId";
import gsap from "gsap";

const articles = [
  {
    name: "Design Patterns: A guide to well-structured applications",
    img: serviceUiUxImg,
    date: "10 Feb 2022",
  },
  {
    name: "React.js Development. How to bring data to life with D3.js",
    img: serviceReactImg,
    date: "03 Apr 2022",
  },
  {
    name: "Digital marketing may save your business",
    img: serviceMarketingImg,
    date: "09 May 2022",
  },
  {
    name: "How smart-contracts can ease our life.",
    img: serviceTechImg,
    date: "22 Sept 2022",
  },
];

export default function VisitOurBlog() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const id = useId();
  const rootRef = useRef();
  const circle1Ref = useRef<HTMLDivElement | null>();
  const circle2Ref = useRef<HTMLDivElement | null>();

  useLayoutEffect(() => {
    if (circle1Ref.current && rootRef.current) {
      let circle1Rect = circle1Ref.current.getBoundingClientRect();
      gsap.to(circle1Ref.current, {
        y: -circle1Rect.height * 1.2,
        scrollTrigger: {
          scrub: 1,
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
        },
      });
    }

    if (circle2Ref.current && rootRef.current) {
      let circle2Rect = circle2Ref.current.getBoundingClientRect();
      gsap.to(circle2Ref.current, {
        x: circle2Rect.width * .5,
        scrollTrigger: {
          scrub: 1,
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
        },
      });
    }
  }, []);

  return (
    <div
      id={id}
      ref={(el) => (rootRef.current = el as any)}
      className={styles.root}
    >
      <div
        ref={(el) => (circle1Ref.current = el as any)}
        className={styles.circle__1}
      ></div>

      <div
        ref={(el) => (circle2Ref.current = el as any)}
        className={styles.circle__2}
      ></div>

      <Container className={styles.root_container}>
        <div className={styles.root_heading}>
          <Text variant="section-announcer">Our Blog</Text>
          <Text variant="title" className={styles.root_title}>
            Explore our recent articles
          </Text>
          <BtnRightArrow text="Take a tour" />
        </div>
        <div className={styles.articles}>
          <Flicking
            circular
            renderOnlyVisible
            align="prev"
            onChanged={(ev) => {
              setSelectedIndex(ev.index);
            }}
          >
            {articles.map((p, i) => {
              return (
                <div
                  key={p.name}
                  className={classNames(
                    "flicking-panel",
                    styles.article_wrapper
                  )}
                >
                  <div className={styles.article}>
                    <img className={styles.img} src={p.img.src} alt={p.name} />
                    <div className={styles.overlay}>
                      <div className={styles.overlay_content}>
                        <div className={styles.name_content}>
                          <Text variant="body" className={styles.date}>
                            {p.date}
                          </Text>
                          <Text variant="body" className={styles.name}>
                            {p.name}
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
            {articles.map((p, index) => {
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
