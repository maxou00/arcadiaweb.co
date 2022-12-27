import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { FaQuoteLeft } from "react-icons/fa";

import styles from "./index.module.scss";
import tes1 from "../../../assets/img/nav_img_1.png";
import tes2 from "../../../assets/img/nav_img_2.png";
import tes3 from "../../../assets/img/nav_img_3.png";
import { Text } from "../../components/Text";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Sync } from "@egjs/flicking-plugins";
import {
  BtnCarouselNext,
  BtnCarouselPrev,
} from "../../components/Buttons/BtnCarouselArrows";
import { Container } from "../../components/Container";
import classNames from "classnames";
import { BsStarFill } from "react-icons/bs";

const items = [
  {
    img: tes1.src,
    name: "Ahon Monsery",
    role: "CEO AT BLUEZONE",
    rating: 4,
    comment: `I wish I would have thought of it first. 
    Creative agency is the most tech valuable business resource we have ever purchased. 
    Dude your stuff  is the bomb! 
    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.`,
  },
  {
    img: tes2.src,
    name: "John Albuquerque",
    role: "CEO AT BLUEZONE",
    rating: 5,
    comment: `I wish I would have thought of it first. 
    Creative agency is the most tech valuable business resource we have ever purchased. 
    Dude your stuff  is the bomb! 
    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.`,
  },
  {
    img: tes3.src,
    name: "Mark Manson",
    role: "CEO AT BLUEZONE",
    rating: 4,
    comment: `I wish I would have thought of it first. 
    Creative agency is the most tech valuable business resource we have ever purchased. 
    Dude your stuff  is the bomb! 
    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.`,
  },
  {
    img: tes2.src,
    name: "Mark Manson",
    role: "CEO AT BLUEZONE",
    rating: 5,
    comment: `I wish I would have thought of it first. 
    Creative agency is the most tech valuable business resource we have ever purchased. 
    Dude your stuff  is the bomb! 
    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.`,
  },
  {
    img: tes3.src,
    name: "Mark Manson",
    role: "CEO AT BLUEZONE",
    rating: 4,
    comment: `I wish I would have thought of it first. 
    Creative agency is the most tech valuable business resource we have ever purchased. 
    Dude your stuff  is the bomb! 
    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.`,
  },
  {
    img: tes1.src,
    name: "Mark Manson",
    role: "CEO AT BLUEZONE",
    rating: 3,
    comment: `I wish I would have thought of it first. 
    Creative agency is the most tech valuable business resource we have ever purchased. 
    Dude your stuff  is the bomb! 
    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.`,
  },
  {
    img: tes3.src,
    name: "Mark Manson",
    role: "CEO AT BLUEZONE",
    rating: 2,
    comment: `I wish I would have thought of it first. 
    Creative agency is the most tech valuable business resource we have ever purchased. 
    Dude your stuff  is the bomb! 
    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.`,
  },
  {
    img: tes2.src,
    name: "Mark Manson",
    role: "CEO AT BLUEZONE",
    rating: 1,
    comment: `I wish I would have thought of it first. 
    Creative agency is the most tech valuable business resource we have ever purchased. 
    Dude your stuff  is the bomb! 
    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.`,
  },
  {
    img: tes3.src,
    name: "Mark Manson",
    role: "CEO AT BLUEZONE",
    rating: 0,
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

  const avatarWidth = 132;
  const avatarHeight = 132;
  const avatarActiveWidth = 256;
  const avatarActiveHeight = 256;
  const viewportPaddingVertical = useMemo(() => {
    return Math.floor((avatarActiveHeight - avatarHeight) / 2);
  }, [avatarActiveHeight, avatarHeight]);

  const viewportHeight = useMemo(() => {
    return 2 * viewportPaddingVertical + avatarActiveHeight;
  }, [avatarActiveHeight, viewportPaddingVertical]);

  useEffect(() => {
    if (avatarFlicking.current) {
      let style = avatarFlicking.current!.viewport.element.style;
      style.paddingTop = viewportPaddingVertical + "px";
      style.paddingBottom = viewportPaddingVertical + "px";
      style.height = viewportHeight + "px";
    }
  }, [viewportHeight, viewportPaddingVertical]);

  useEffect(() => {
    setPlugins([
      new Sync({
        type: "index",
        synchronizedFlickingOptions: [
          {
            flicking: avatarFlicking.current!,
            isClickable: true,
            isSlidable: true,
          },
          {
            flicking: commentFlicking.current!,
            isClickable: true,
            isSlidable: true,
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

  const stars = Array(5).fill(0);

  return (
    <div
      className={styles.root}
      style={
        {
          "--avatar-viewport-height": viewportHeight + "px",
          "--avatar-height": avatarHeight + "px",
          "--avatar-width": avatarWidth + "px",
          "--avatar-selected-height": avatarActiveHeight + "px",
          "--avatar-selected-width": avatarActiveWidth + "px",
          "--avatar-viewport-padding-y": viewportPaddingVertical + "px",
        } as any
      }
    >
      <Container className={styles.root_container}>
        <div
          data-role="testimonials_avatars_wrapper"
          className={styles.avatars}
        >
          <Flicking
            ref={(el) => (avatarFlicking.current = el)}
            plugins={plugins}
            circular
            align="center"
            adaptive
            onChanged={(ev) => {
              setSelectedAvatar(ev.index);
            }}
          >
            {items.map((it, index) => {
              return (
                <div
                  key={it.name + index}
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
            align="center"
            circular
            panelsPerView={1}
            onChanged={(ev) => {
              setSelectedComment(ev.index);
            }}
          >
            {items.map((it, index) => {
              return (
                <div
                  key={it.name + index}
                  className={classNames(
                    "flicking-panel",
                    styles.comment_wrapper
                  )}
                  data-selected={selectedComment === index}
                >
                  <FaQuoteLeft size={36} />
                  <div className={styles.comment}>
                    <Text variant="body" className={styles.comment_text}>
                      {it.comment}
                    </Text>

                    <div className={styles.stars}>
                      {stars.map((_, s) => {
                        let opacity = it.rating >= s + 1 ? 1 : 0.4;
                        return (
                          <BsStarFill key={s} size={24} opacity={opacity} />
                        );
                      })}
                    </div>

                    <div className={styles.comment_author}>
                      <Text
                        variant="body"
                        className={styles.comment_author_name}
                      >
                        {it.name}
                      </Text>
                      <Text
                        variant="body"
                        className={styles.comment_author_role}
                      >
                        <span className="trait"></span>
                        {"  "}
                        {it.role}
                      </Text>
                    </div>
                  </div>
                </div>
              );
            })}
          </Flicking>
          <div className={styles.carousel_btns}>
            <BtnCarouselPrev onClick={onPrev} />
            <BtnCarouselNext onClick={onNext} />
          </div>
        </div>
      </Container>
    </div>
  );
}
