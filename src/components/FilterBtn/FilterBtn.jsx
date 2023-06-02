import React from "react";
import styles from "./filterbtn.module.scss";

function FilterBtn({ title }) {
  return (
    <>
      <button className={styles.filterbtn}>{title}</button>
    </>
  );
}

export default FilterBtn;
