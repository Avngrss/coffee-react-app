import React from "react";
import styles from "./footer.module.scss";

import footerLogo from "../../assets/img/Logofooter.svg";
import decorateTwo from "../../assets/img/beanslogos.svg";

function Footer() {
  return (
    <div>
      <div className={styles.footer}>
        <img src={footerLogo} alt="footerLogo" />
        <ul className={styles.menu}>
          <li>
            <a href="#">Our coffee</a>
          </li>
          <li>
            <a href="#">For your pleasure</a>
          </li>
        </ul>
      </div>
      <img src={decorateTwo} alt="decorate" className={styles.decorate} />
    </div>
  );
}

export default Footer;
