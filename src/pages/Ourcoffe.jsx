import React from "react";
import { motion } from "framer-motion";
import Menu from "../components/Menu/Menu";
import styles from "./ourcodde.module.scss";
import decorate from "../assets/img/beanslogos.svg";
import girlImg from "../assets/img/girl.jpg";
import Search from "../components/Search/Search";
import Filter from "../components/Filter/Filter";

function Ourcoffe() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className={styles.imgbg}>
        <Menu />
        <h2 className={styles.title}>Our Coffee</h2>
      </div>
      <div className={styles.infoBlock}>
        <img src={girlImg} alt="girlImg" />
        <div className={styles.leftblock}>
          <h3 className={styles.smalltitle}>About our beans</h3>
          <img src={decorate} alt="decorate" />
          <p>
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is
            song that held help face.
          </p>
        </div>
      </div>
      <div className={styles.filterblock}>
        <Search />
        <Filter />
      </div>
    </motion.div>
  );
}

export default Ourcoffe;
