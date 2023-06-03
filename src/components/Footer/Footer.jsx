import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.scss";

import footerLogo from "../../assets/img/Logofooter.svg";
import decorateTwo from "../../assets/img/beanslogos.svg";

function Footer() {
  return (
    <div>
      <div className={styles.footer}>
        <Link to="/">
          <img src={footerLogo} alt="logo" />
        </Link>
        <ul className={styles.menu}>
          <Link to="/ourcoffe">
            <li>Our coffee</li>
          </Link>
          <Link to="/pleasure">
            <li>For your pleasure</li>
          </Link>
        </ul>
      </div>
      <img src={decorateTwo} alt="decorate" className={styles.decorate} />
    </div>
  );
}

export default Footer;
