import React from "react";
import Menu from "../Menu/Menu";
import styles from "../../pages/ourcoffe.module.scss";

function Coffeeheader() {
  return (
    <div>
      <div className={styles.imgbg}>
        <Menu />
        <h2 className={styles.title}>Our Coffee</h2>
      </div>
    </div>
  );
}

export default Coffeeheader;
