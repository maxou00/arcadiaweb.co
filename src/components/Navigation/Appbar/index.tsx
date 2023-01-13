import Link from "next/link";
import { Envelope, List, MapPin, Phone, X } from "phosphor-react";
import { useEffect, useLayoutEffect, useState } from "react";
import { FaLinkedin, FaSlack, FaTwitter, FaYoutube } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Logo from "../../../embedded/Logo";
import LogoFull from "../../../embedded/LogoFull";
import { useNavbarScrollAnimation } from "../../../hooks/useNavbarScrollAnimation";
import { useNodeRect } from "../../../hooks/useNodeRect";
import { Container } from "../../Container";
import { InputNewsletter } from "../../Inputs/InputNewsletter";
import NavigationDrawer from "../drawer";
import NavItem from "../NavItem";
import NavItemSurface from "../NavItem/surface";
import styles from "./index.module.scss";

function DesktopMenu(props: { parent: HTMLDivElement | undefined }) {
  const services = [
    "React.js Development",
    "Digital Marketing",
    "UI/UX Design",
  ];

  return (
    <div data-variant="desktop" className={styles.menu}>
      <NavItem
        className={styles.item}
        withSurface
        surfaceExpanded
        anchor={props.parent}
      >
        <span className={styles.title}>Home</span>
        <NavItemSurface>
          <p>Here is the home space</p>
        </NavItemSurface>
      </NavItem>
      <Link href="/about">
        <NavItem className={styles.item}>
          <span className={styles.title}>About</span>
        </NavItem>
      </Link>
      <NavItem className={styles.item} withSurface anchor={props.parent}>
        <span className={styles.title}>Services</span>
        <NavItemSurface>
          {services.map((s) => {
            return (
              <div key={s} className={styles.service}>
                <p>{s}</p>
              </div>
            );
          })}
        </NavItemSurface>
      </NavItem>
      <NavItem className={styles.item} withSurface anchor={props.parent}>
        <span className={styles.title}>Portfolio</span>
        <NavItemSurface>
          <p>Our latest projects.</p>
        </NavItemSurface>
      </NavItem>
      <NavItem className={styles.item}>
        <span className={styles.title}>blog</span>
      </NavItem>
    </div>
  );
}

export function Appbar() {
  const [parentRef, setParentRef] = useState<HTMLDivElement | null>();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { trackingRef, inView, shouldFix, lastScrollPercent } =
    useNavbarScrollAnimation();

  const appbar = useNodeRect();

  useEffect(() => {
    if (appbar.client) {
      let root = document.querySelector(":root") as HTMLHtmlElement;
      root.style.setProperty("--appbar-height", appbar.client.height+"px");
      root.style.setProperty("--appbar-width", appbar.client.width+"px");
    }
  }, [appbar.client]);

  return (
    <div className={styles.appbar__wrapper}>
      <div
        ref={trackingRef}
        className={styles.appbar__tracker}
        style={{
          width: appbar.client?.width ?? 0,
          height: appbar.client?.height ?? 0,
        }}
      ></div>
      <div
        ref={(el) => (appbar.ref.current = el as any)}
        data-fixed={shouldFix}
        className={styles.appbar}
      >
        <Container className={styles.content} innerRef={setParentRef}>
          <LogoFull className={styles.logo} />
          <DesktopMenu parent={parentRef ?? undefined} />
          <div className={styles.side_actions}>
            <button
              onClick={() => setDrawerOpen(true)}
              className={styles.hamburger}
            >
              <List size={32} />
            </button>
          </div>
        </Container>
        <NavigationDrawer
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <div className={styles.menu_drawer}>
            <button
              className={styles.close_btn}
              onClick={() => setDrawerOpen(false)}
            >
              <X size={24} />
            </button>

            <div className={styles.heading}>
              <h2 className={styles.heading_title}>Arcadiaweb</h2>
              <p className={styles.heading_description}>
                Do you have a project in your mind? Keep connect us.
              </p>
            </div>

            <div className={styles.contacts}>
              <h2 className={styles.section_title}>Contact Us</h2>
              <div className={styles.contact}>
                <Phone size={24} color="var(--colors-primary)" />
                <p>+44 454 7800 112</p>
              </div>
              <div className={styles.contact}>
                <Envelope size={24} color="var(--colors-primary)" />
                <p>infotech@arino.com</p>
              </div>
              <div className={styles.contact}>
                <MapPin size={24} color="var(--colors-primary)" />
                <p>50 Wall Street Suite, 44150 Ohio, United States</p>
              </div>
            </div>
            <div className={styles.subscribe}>
              <h3>Subscribe</h3>
              <InputNewsletter />
              <p className={styles.subscription_text}>
                At vero eos et accusamus et iusto odio as part dignissimos
                ducimus qui blandit.
              </p>
            </div>
            <div className={styles.social_row}>
              <button className={styles.social}>
                <FaLinkedin size={18} />
              </button>
              <button className={styles.social}>
                <FaTwitter size={18} />
              </button>
              <button className={styles.social}>
                <FaYoutube size={18} />
              </button>
              <button className={styles.social}>
                <FaSlack size={18} />
              </button>
            </div>
          </div>
        </NavigationDrawer>
      </div>
    </div>
  );
}
