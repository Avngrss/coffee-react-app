import React from "react";
import FilterBtn from "../FilterBtn/FilterBtn";
import styles from "./filter.module.scss";

const btns = ["Brazil", "Kenya", "Columbia"];

function Filter() {
  return (
    <div className={styles.search}>
      <p>Or filter</p>
      <div className={styles.btncontent}>
        {btns.map((item) => (
          <FilterBtn title={item} />
        ))}
      </div>
    </div>
  );
}

export default Filter;
