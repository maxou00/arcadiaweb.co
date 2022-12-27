import classNames from "classnames";
import { HTMLAttributes, useMemo } from "react";
import styles from "./index.module.scss";

interface HeroProps extends HTMLAttributes<HTMLHeadingElement> {
  variant: "hero";
}

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  variant: "title";
}

interface SectionAnnouncerProps extends HTMLAttributes<HTMLSpanElement> {
  variant: "section-announcer";
}

interface SubtitleProps extends HTMLAttributes<HTMLHeadingElement> {
  variant: "subtitle";
}

interface BodyProps extends HTMLAttributes<HTMLHeadingElement> {
  variant: "body";
}

type TextProps =
  | HeroProps
  | TitleProps
  | SubtitleProps
  | SectionAnnouncerProps
  | BodyProps;

export function Text(props: TextProps) {
  let clx = classNames(styles.text, props.className || "");

  if (props.variant === "subtitle") {
    return (
      <p data-variant={props.variant} {...props} className={clx}>
        {props.children}
      </p>
    );
  }
  if (props.variant === "body") {
    return (
      <p data-variant={props.variant} {...props} className={clx}>
        {props.children}
      </p>
    );
  }
  if (props.variant === "hero") {
    return (
      <h1 data-variant={props.variant} {...props} className={clx}>
        {props.children}
      </h1>
    );
  }
  if (props.variant === "section-announcer") {
    return (
      <span data-variant={props.variant} {...props} className={clx}>
        {props.children}
      </span>
    );
  }
  return (
    <h2 data-variant={props.variant} {...props} className={clx}>
      {props.children}
    </h2>
  );
}
