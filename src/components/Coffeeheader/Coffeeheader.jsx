import React from "react";
import Menu from "../Menu/Menu";
import styles from "../../pages/ourcoffe.module.scss";

function Coffeeheader({ text, img }) {
  return (
    <div>
      <div style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", paddingBottom: "60px" }}>
        <Menu />
        <h2 className={styles.title}>{text}</h2>
      </div>
    </div>
  );
}

export default Coffeeheader;
