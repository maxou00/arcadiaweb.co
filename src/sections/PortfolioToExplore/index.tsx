import Flicking, { Panel, ReadyEvent } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

import classNames from "classnames";
import { Text } from "../../components/Text";
import styles from "./index.module.scss";

import portfolio1 from "../../../assets/img/portfolio_1.jpeg";
import portfolio2 from "../../../assets/img/portfolio_2.jpeg";
import portfolio3 from "../../../assets/img/portfolio_3.jpeg";
import { useCallback, useState } from "react";

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
    name: "Project Gamma",
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
          renderOnlyVisible
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
                <div data-selected={selectedIndex === i} className={styles.project}>
                  <img className={styles.img} src={p.img} alt={p.name} />
                  <div className={styles.overlay}>
                    <Text variant="body" className={styles.name}>
                      {p.name}
                    </Text>
                  </div>
                </div>
              </div>
            );
          })}
        </Flicking>
      </div>
    </div>
  );
}
