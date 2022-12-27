import { BtnRightArrow } from "../../../components/Buttons/BtnRightArrow";
import { Text } from "../../../components/Text";
import styles from "./index.module.scss";

export function CtaSomethingCool(){
    return <div className={styles.base}>
        <Text variant="title" className={styles.title}>Let's bring your idea to life. #Together.</Text>
        <BtnRightArrow text="Apply For Meeting"/>
    </div>
}