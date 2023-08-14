import React from "react";
// import "../index.css";
import file from "../mock/data.json";
import styles from "../style/index.module.scss";

export default function CardList() {
  console.log(file);
  const newComponent = <div className={styles.component}>NEW!</div>;
  const fetureComponent = <div className={styles.component}>FEATURED</div>;
  const newFile = file.map((obj) => {
    const btnToolsFn = () => {
      const newArr = obj.tools.map((skill, i) => {
        if (obj.tools.length === 0) {
          return null;
        } else {
          return (
            <button key={i} className={styles.btn}>
              {skill}
            </button>
          );
        }
      });
      return newArr;
    };

    const btnLanguagesFn = () => {
      const newArr = obj.languages.map((language, i) => {
        if (obj.languages.length === 0) {
          return null;
        } else {
          return (
            <button key={i} className={styles.btn}>
              {language}
            </button>
          );
        }
      });
      return newArr;
    };

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
          <div className={styles.secondContent}>
            <button className={styles.btn}>{obj.role}</button>
            <button className={styles.btn}>{obj.level}</button>
            {btnLanguagesFn()}
            {btnToolsFn()}
          </div>
        </div>
      </div>
    );
  });
  return <div className={styles.listWrapper}>{newFile}</div>;
}
