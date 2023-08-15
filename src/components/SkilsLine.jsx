import styles from "../style/_filterLine.module.scss";
import UiBtn from "./UiBtn";
export default function SkilsLine() {
  return (
    <div className={styles.divFilterLine}>
      <div className={styles.filterLine}>
        <UiBtn />
      </div>
    </div>
  );
}
