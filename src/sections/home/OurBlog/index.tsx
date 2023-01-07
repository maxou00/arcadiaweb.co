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
import { useState } from "react";

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

export function VisitOurBlog() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className={styles.root}>
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
