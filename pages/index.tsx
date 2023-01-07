import Head from "next/head";
import styles from "../styles/Home.module.css";
import { WhatCanWeDo } from "../src/sections/home/WhatCanWeDo";
import { OurTeam } from "../src/sections/home/Team";
import { Testimonials } from "../src/sections/home/Testimonials";
import { VisitOurBlog } from "../src/sections/home/OurBlog";
import { Container } from "../src/components/Container";
import { CtaSomethingCool } from "../src/sections/home/ctas/CtaSomethingCool";
import { Heading } from "../src/sections/home/Heading";
import { OurFunFact } from "../src/sections/home/OurFunFact";
import { PortfolioToExplore } from "../src/sections/home/PortfolioToExplore";
import OurAwards from "../src/sections/home/OurAwards";
import { OurProcess } from "../src/sections/home/OurProcess";
import { MarqueeSlide } from "../src/sections/home/MarqueeEffect";
import { Partners } from "../src/sections/Partners";

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
          <OurFunFact transform />
          <WhatCanWeDo />
          <PortfolioToExplore />
          <OurAwards />
          <OurProcess />
          <OurTeam />
          <Testimonials />
          <VisitOurBlog />
          <MarqueeSlide />
          <Partners />
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
