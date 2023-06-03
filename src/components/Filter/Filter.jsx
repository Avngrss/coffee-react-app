import React from "react";
import FilterBtn from "../FilterBtn/FilterBtn";
import styles from "./filter.module.scss";

function Filter({ filterCoffee, filterItems }) {
  return (
    <div className={styles.search}>
      <p>Or filter</p>
      <div className={styles.btncontent}>
        {filterItems.map((item, i) => (
          <FilterBtn key={i} title={item} filterCoffee={filterCoffee} />
        ))}
      </div>
    </div>
  );
}

export default Filter;
