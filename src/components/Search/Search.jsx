import React from "react";
import styles from "./search.module.scss";

function Search({ onChangeSearchValue, searchValue }) {
  return (
    <div className={styles.search}>
      <span>{searchValue ? `search by request: "${searchValue}"` : "Lookiing for"}</span>
      <input type="text" placeholder="start typing here..." onChange={onChangeSearchValue} />
    </div>
  );
}

export default Search;
