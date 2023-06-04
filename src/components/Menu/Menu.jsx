import React from "react";

import { Link } from "react-router-dom";
import styles from "./menu.module.scss";
import logo from "../../assets/img/Logo.svg";

function Header() {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src={logo} alt="logo" />
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
  );
}

export default Header;
