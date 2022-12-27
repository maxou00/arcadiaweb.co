import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Heading } from "../src/sections/Heading";
import { OurFunFact } from "../src/sections/OurFunFact";
import { WhatCanWeDo } from "../src/sections/WhatCanWeDo";
import { PortfolioToExplore } from "../src/sections/PortfolioToExplore";
import { OurTeam } from "../src/sections/Team";
import { Testimonials } from "../src/sections/Testimonials";
import { VisitOurBlog } from "../src/sections/OurBlog";
import { Container } from "../src/components/Container";
import { CtaSomethingCool } from "../src/sections/ctas/CtaSomethingCool";

export default function Home() {
  return (
    <>
      <Head>
        <title>Arcadia</title>
        <meta
          name="description"
          content="We help you to turn your idea into a stunning business"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Heading />
        <div className={styles.content}>
          <OurFunFact />
          <WhatCanWeDo />
          <PortfolioToExplore />
          <OurTeam />
          <Testimonials />
          <VisitOurBlog />
          <div className={styles.cta_wrapper}>
            <Container>
              <CtaSomethingCool />
            </Container>
          </div>
        </div>
      </main>
    </>
  );
}
