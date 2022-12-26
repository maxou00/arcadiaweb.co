import styles from "./index.module.scss";

const blocs = [
  {
    number: "40K",
    what: "Global happy businesses",
  },
  {
    number: "50K",
    what: "Projects completed",
  },
  {
    number: "245K",
    what: "Team members",
  },
  {
    number: "50K",
    what: "Projects completed",
  },
];
export function OurFunFact() {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
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
                <p className={styles.bloc_title}>{bloc.number}</p>
                <div className={styles.bloc_content}>
                  <span className={styles.plus}>+</span>
                  <p className={styles.p}>{bloc.what}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
