import React from "react";

import styles from "./aboutcoffee.module.scss";

import Coffeeheader from "../components/Coffeeheader/Coffeeheader";
import coffeePage from "../assets/img/coffeepage.jpg";
import decorate from "../assets/img/beanslogos.svg";
import coffeebg from "../assets/img/coffebg.jpg";

function AboutCoffee() {
  return (
    <div>
      <Coffeeheader text={"Our Coffee"} img={coffeebg} />
      <div className={styles.coffeeflex}>
        <img src={coffeePage} alt="coffeePage" />
        <div className={styles.left}>
          <h2 className={styles.title}>About it</h2>
          <img src={decorate} alt="decorate" />
          <p>
            <span className={styles.boldSpan}>Country: Brasil</span>
          </p>
          <p className={styles.text}>
            <span className={styles.boldSpan}>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className={styles.text}>
            Price: <span className={styles.price}>16.99$</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutCoffee;
