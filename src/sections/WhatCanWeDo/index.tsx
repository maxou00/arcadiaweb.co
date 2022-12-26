import { BtnRightArrow } from "../../components/Buttons/BtnRightArrow";
import { Container } from "../../components/Container";
import { Text } from "../../components/Text";
import styles from "./index.module.scss";
import serviceUiUxImg from "../../../assets/img/service_1.jpeg";
import serviceReactImg from "../../../assets/img/service_2.jpeg";
import serviceMarketingImg from "../../../assets/img/service_3.jpeg";
import serviceTechImg from "../../../assets/img/service_4.jpeg";

const services = [
  {
    name: "UI/UX Design",
    img: serviceUiUxImg,
    cell: [2, 1],
  },
  {
    name: "React.js Development",
    img: serviceReactImg,
    cell: [4, 1],
  },
  {
    name: "Digital Marketing",
    img: serviceMarketingImg,
    cell: [1, 2],
  },
  {
    name: "Technology",
    img: serviceTechImg,
    cell: [3, 2],
  },
];

export function WhatCanWeDo() {
  return (
    <div className={styles.root}>
      <Container className={styles.root_container}>
        <div className={styles.root_heading}>
          <Text variant="section-announcer">What can we do</Text>
          <Text variant="title" className={styles.root_title}>
            Services we can help you with
          </Text>
          <BtnRightArrow text="See all services" />
        </div>
        <div className={styles.services}>
          {services.map((service) => {
            return (
              <div
                key={service.name}
                className={styles.service}
                data-col={service.cell[0]}
                data-row={service.cell[1]}
              >
                <img
                  src={service.img.src}
                  alt={service.name}
                  className={styles.img}
                />
                <div className={styles.textlayer}>
                  <Text variant="body" className={styles.text}>
                    {service.name}
                  </Text>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
