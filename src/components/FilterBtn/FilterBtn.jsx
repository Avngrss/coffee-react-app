import React from "react";
import styles from "./filterbtn.module.scss";

function FilterBtn({ title, filterCoffee }) {
  return (
    <>
      <button
        className={styles.filterbtn}
        onClick={() => {
          filterCoffee(title);
        }}
      >
        {title}
      </button>
    </>
  );
}

export default FilterBtn;
