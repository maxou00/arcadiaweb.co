import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

import styles from "./index.module.scss";
import tes1 from "../../../assets/img/nav_img_1.png";
import tes2 from "../../../assets/img/nav_img_2.png";
import tes3 from "../../../assets/img/nav_img_3.png";
import { Text } from "../../components/Text";
import { useCallback, useEffect, useRef, useState } from "react";
import { Sync } from "@egjs/flicking-plugins";
import {
  BtnCarouselNext,
  BtnCarouselPrev,
} from "../../components/Buttons/BtnCarouselArrows";
import { Container } from "../../components/Container";
import classNames from "classnames";

const items = [
  {
    img: tes1.src,
    name: "Ahon Monsery",
    rating: 4,
    comment: `I wish I would have thought of it first. 
    Creative agency is the most tech valuable business resource we have ever purchased. 
    Dude your stuff  is the bomb! 
    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.`,
  },
  {
    img: tes2.src,
    name: "John Albuquerque",
    rating: 3,
    comment: `I wish I would have thought of it first. 
    Creative agency is the most tech valuable business resource we have ever purchased. 
    Dude your stuff  is the bomb! 
    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.`,
  },
  {
    img: tes3.src,
    name: "Mark Manson",
    rating: 5,
    comment: `I wish I would have thought of it first. 
    Creative agency is the most tech valuable business resource we have ever purchased. 
    Dude your stuff  is the bomb! 
    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.`,
  },
];

export function Testimonials() {
  const [selectedAvatar, setSelectedAvatar] = useState(0);
  const [selectedComment, setSelectedComment] = useState(0);

  const avatarFlicking = useRef<Flicking | null>();
  const commentFlicking = useRef<Flicking | null>();

  const [plugins, setPlugins] = useState<any[]>([]);

  useEffect(() => {
    setPlugins([
      new Sync({
        type: "index",
        synchronizedFlickingOptions: [
          {
            flicking: avatarFlicking.current!,
            isClickable: true,
            isSlidable: true
          },
          {
            flicking: commentFlicking.current!,
            isClickable: true,
            isSlidable: true
          },
        ],
      }),
    ]);
  }, []);

  const onPrev = useCallback(() => {
    if (commentFlicking.current) {
      commentFlicking.current.prev();
    }
  }, []);

  const onNext = useCallback(() => {
    if (commentFlicking.current) {
      commentFlicking.current.next();
    }
  }, []);

  return (
    <div className={styles.root}>
      <Container className={styles.root_container}>
        <div className={styles.avatars}>
          <Flicking
            ref={(el) => (avatarFlicking.current = el)}
            plugins={plugins}
            circular
            renderOnlyVisible
            align="prev"
            bound={true}
            bounce={30}
            onChanged={(ev) => {
              setSelectedAvatar(ev.index);
            }}
          >
            {items.map((it, index) => {
              return (
                <div
                  key={it.name}
                  className={classNames(
                    "flicking-panel",
                    styles.avatar_wrapper
                  )}
                  data-selected={selectedAvatar === index}
                >
                  <img className={styles.avatar} src={it.img} alt={it.name} />
                </div>
              );
            })}
          </Flicking>
        </div>
        <div className={styles.comments}>
          <Flicking
            ref={(el) => (commentFlicking.current = el)}
            bound={true}
            bounce={30}
            circular
            renderOnlyVisible
            panelsPerView={1}
            onChanged={(ev) => {
              setSelectedComment(ev.index);
            }}
          >
            {items.map((it, index) => {
              return (
                <div
                  key={it.name}
                  className={classNames(
                    "flicking-panel",
                    styles.comment_wrapper
                  )}
                  data-selected={selectedComment === index}
                >
                  <div className={styles.comment}>
                    <Text variant="body" className={styles.comment_text}>
                      {it.comment}
                    </Text>
                  </div>
                </div>
              );
            })}
          </Flicking>
        </div>
        <div className={styles.carousel_btns}>
          <BtnCarouselPrev onClick={onPrev} />
          <BtnCarouselNext onClick={onNext} />
        </div>
      </Container>
    </div>
  );
}
