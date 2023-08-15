import React from "react";
import { useSelector } from "react-redux";

import styles from "../style/index.module.scss";
import { selectAllPositions } from "../store/positiions/positions-selectors";
export default function CardList() {
  const arr = useSelector(selectAllPositions);
  console.log(arr);
  const newComponent = <div className={styles.component}>NEW!</div>;
  const fetureComponent = <div className={styles.component}>FEATURED</div>;
  //
  const newFile = arr.map((obj) => {
    const allBtnArr = [].concat(
      ...obj.tools,
      ...obj.languages,
      obj.level,
      obj.role
    );

    const btnSkillComponents = allBtnArr.map((skill, i) => {
      return (
        <button key={i} className={styles.btn}>
          {skill}
        </button>
      );
    });

    console.log(allBtnArr);

    return (
      <div
        className={obj.featured ? styles.active : styles.cardWrapper}
        key={obj.id}
      >
        <div className={styles.content}>
          <div className={styles.firstContent}>
            <div className={styles.avatar}>
              <img src={obj.logo} alt="avatar" className={styles.image}></img>
            </div>
            <div className={styles.mainInfo}>
              <div className={styles.firstRow}>
                <div className={styles.company}>{obj.company}</div>
                <div className={styles.new}>
                  {obj.new ? newComponent : null}
                </div>

                <div className={styles.featured}>
                  {obj.featured ? fetureComponent : null}
                </div>
              </div>
              <div className={styles.secondRow}>{obj.position}</div>
              <div className={styles.grayColorTextDiv}>
                <div className={styles.gray}>{obj.postedAt}</div>
                <div className={styles.gray}>·</div>
                <div className={styles.gray}>{obj.contract}</div>
                <div className={styles.gray}>·</div>
                <div className={styles.gray}>{obj.location}</div>
              </div>
            </div>
          </div>
          <div className={styles.secondContent}>{btnSkillComponents}</div>
        </div>
      </div>
    );
  });
  return <div className={styles.listWrapper}>{newFile}</div>;
}
