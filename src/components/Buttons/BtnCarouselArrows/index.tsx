import classNames from "classnames";
import { HTMLAttributes } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import styles from "./index.module.scss";

type Props = HTMLAttributes<HTMLButtonElement> & { iconSize?: number}

export function BtnCarouselPrev({iconSize, ...props}: Props) {
    return <button {...props} className={classNames(styles.button, props.className || "")}>
        <BsArrowLeft size={iconSize || 24}/>
    </button>
}

export function BtnCarouselNext({ iconSize, ...props}: Props ) {
    return <button  {...props} className={classNames(styles.button, props.className || "")}>
        <BsArrowRight size={iconSize || 24}/>
    </button>
}