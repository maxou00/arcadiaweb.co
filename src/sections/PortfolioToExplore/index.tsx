import Flicking, {  } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";

import classNames from "classnames";
import { Text } from "../../components/Text";
import styles from "./index.module.scss";

import portfolio1 from "../../../assets/img/portfolio_1.jpeg";
import portfolio2 from "../../../assets/img/portfolio_2.jpeg";
import portfolio3 from "../../../assets/img/portfolio_3.jpeg";
import { useState } from "react";

const projects = [
  {
    name: "Project Alpha",
    img: portfolio1.src,
  },
  {
    name: "Project Beta",
    img: portfolio2.src,
  },
  {
    name: "Project Epsilon",
    img: portfolio3.src,
  },
];

export function PortfolioToExplore() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        <Text variant="section-announcer">Latest projects</Text>
        <Text variant="title">Portfolio to Explore</Text>
      </div>
      <div className={styles.projects}>
        <Flicking
          circular
          align="center"
          onChanged={(ev) => {
            setSelectedIndex(ev.index);
          }}
        >
          {projects.map((p, i) => {
            return (
              <div
                key={p.name}
                className={classNames("flicking-panel", styles.project_wrapper)}
                data-selected={selectedIndex === i}
              >
                <div
                  data-selected={selectedIndex === i}
                  className={styles.project}
                >
                  <img className={styles.img} src={p.img} alt={p.name} />
                  <div className={styles.overlay}>
                    <div className={styles.overlay_content}>
                      <div className={styles.name_content}>
                        <Text variant="body" className={styles.name}>
                          {p.name}
                        </Text>
                        <Text variant="body" className={styles.see_details}>
                          See details {"  "}
                          <span style={{ letterSpacing: -3 }}>₋₋₋₋</span>
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
          {projects.map((p, index) => {
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
    </div>
  );
}
