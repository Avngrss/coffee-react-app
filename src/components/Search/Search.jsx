import React from "react";
import styles from "./search.module.scss";

function Search() {
  return (
    <div className={styles.search}>
      <span>Lookiing for</span>
      <input type="text" placeholder="start typing here..." />
    </div>
  );
}

export default Search;
