import React from "react";
import styles from "./coffeecard.module.scss";

function CoffeeCard({ img, title, country, price }) {
  return (
    <div className={styles.card}>
      <img className={styles.cardimg} width="167px" height="115px" src={img} alt="coffee" />
      <p className={styles.cardtitle}>{title}</p>
      <span className={styles.cardcountry}>{country}</span>
      <span className={styles.cardprice}>{price}</span>
    </div>
  );
}

export default CoffeeCard;
