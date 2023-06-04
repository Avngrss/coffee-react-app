import React from "react";
import styles from "./infoblock.module.scss";
import decorate from "../../assets/img/beanslogos.svg";

function Info({ img, title, text }) {
  return (
    <div className={styles.infoBlock}>
      <img src={img} alt="girlImg" />
      <div className={styles.leftblock}>
        <h3 className={styles.smalltitle}>{title}</h3>
        <img src={decorate} alt="decorate" />
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Info;
