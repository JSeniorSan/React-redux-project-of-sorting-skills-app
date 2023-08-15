import styles from "../style/_cardSpace.module.scss";
function UiBtn(props) {
  return (
    <div className={styles.flexBtnX}>
      <div className={styles.btnActive}>React</div>
      <button className={styles.x}>X</button>
    </div>
  );
}
export default UiBtn;
