import classNames from "classnames";
import { HTMLAttributes } from "react";
import { Container } from "../../../components/Container";
import Odometer from "../../../components/Odometer";
import styles from "./index.module.scss";

const blocs = [
  {
    number: 40,
    what: "Happy businesses",
  },
  {
    number: 60,
    what: "Projects completed",
  },
  {
    number: 50,
    what: "Team members",
  },
  {
    number: 5,
    what: "Digital solutions",
  },
];

export function OurFunFact({
  transform,
  ...props
}: HTMLAttributes<HTMLDivElement> & { transform?: boolean }) {
  return (
    <div
      {...props}
      data-transform={transform || false}
      className={classNames(styles.root, props.className ?? "")}
    >
      <Container className={styles.content} data-transform={transform || false}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Our fun fact</h2>
          <p className={styles.description}>
            During our 12 years of existence, we have established a bullet-proof
            record of projects, helped many businesses to launch, scale and
            thrive.
          </p>
        </div>
        <div className={styles.achievements}>
          {blocs.map((bloc) => {
            return (
              <div key={bloc.what} className={styles.bloc}>
                <Odometer
                  value={bloc.number}
                  style={{
                    fontSize: "var(--number-font-size)",
                    fontWeight: "var(--number-font-weight)",
                    fontFamily: "var(--fonts-body)",
                  }}
                />
                <div className={styles.bloc_content}>
                  <span className={styles.plus}>+</span>
                  <p className={styles.p}>{bloc.what}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
