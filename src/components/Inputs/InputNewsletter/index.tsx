import classNames from "classnames";
import { HTMLAttributes } from "react";
import styles from "./input.module.scss";

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  input?: HTMLAttributes<HTMLInputElement>;
  button?: HTMLAttributes<HTMLButtonElement>;
}

export function InputNewsletter({
  className,
  input,
  button,
  ...props
}: InputProps) {
  return (
    <div {...props} className={classNames(styles.input_root, className || "")}>
      <input
        type="email"
        placeholder="example@gmail.com"
        {...input}
        className={classNames(styles.input, input?.className || "")}
      />
      <button
        {...button}
        className={classNames(styles.button, button?.className || "")}
      >
        Send
      </button>
    </div>
  );
}
