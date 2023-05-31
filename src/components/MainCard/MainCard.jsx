import React from "react";
import styles from "./maincard.module.scss";

function MainCard({ img, title, price }) {
  return (
    <div className={styles.card}>
      <img className={styles.maincard} src={img} alt="coffe" />
      <h5>{title}</h5>
      <span>{price}</span>
    </div>
  );
}

export default MainCard;
