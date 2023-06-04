import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import styles from "./main.module.scss";

import Menu from "../Menu/Menu";
import MainCard from "../MainCard/MainCard";

import decorate from "../../assets/img/beanslogo.svg";
import decorateTwo from "../../assets/img/beanslogos.svg";

const mainCard = [
  { img: "/img/SolimoCoffeeBeans.png", title: "Solimo Coffee Beans 2 kg", price: "10.73$" },
  { img: "/img/PrestoCoffeeBeans.png", title: "Presto Coffee Beans 1 kg", price: "15.99$" },
  { img: "/img/AROMISTICOCoffee.png", title: "AROMISTICO Coffee 1 kg", price: "6.99$" },
];

function Main() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className={styles.main}>
        <Menu />
        <h1 className={styles.title}>Everything You Love About Coffee</h1>
        <img src={decorate} alt="decorate" className={styles.decorate} />
        <p className={styles.subtitle}>
          We makes every day full of energy and taste <br /> Want to try our beans?
        </p>
        <Link to="/ourcoffe">
          <button className={styles.mainbtn}>More</button>
        </Link>
      </div>
      <section className={styles.infosection}>
        <h2 className={styles.minititle}>About Us</h2>
        <img src={decorateTwo} alt="decorate" className={styles.decorate} />
        <p className={styles.info}>
          Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is
          song that held help face.
        </p>
        <p className={styles.info}>
          Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.
        </p>
      </section>
      <section className={styles.cardContent}>
        <h2 className={styles.minititle}>Our best</h2>
        <div className={styles.carditems}>
          {mainCard.map((item, i) => (
            <MainCard key={i} img={item.img} title={item.title} price={item.price} />
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default Main;
