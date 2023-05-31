import React from "react";
import styles from "./menu.module.scss";
import logo from "../../assets/img/Logo.svg";

function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" />
      <ul className={styles.menu}>
        <li>
          <a href="#">Our coffee</a>
        </li>
        <li>
          <a href="#">For your pleasure</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
