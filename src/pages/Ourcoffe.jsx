import React from "react";
import { motion } from "framer-motion";

import styles from "./ourcoffe.module.scss";
import Menu from "../components/Menu/Menu";
import Search from "../components/Search/Search";
import Filter from "../components/Filter/Filter";
import CoffeeCard from "../components/CoffeeCard/CoffeeCard";

import decorate from "../assets/img/beanslogos.svg";
import girlImg from "../assets/img/girl.jpg";
import { Link } from "react-router-dom";

const coffee = [
  { img: "/img/coffee1.png", title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "8.99$" },
  { img: "/img/coffee2.png", title: "Uniflex Coffee 1 kg", country: "Kenya", price: "12$" },
  { img: "/img/coffee3.png", title: "Drip Coffee 1 kg", country: "Columbia", price: "6.99$" },
  { img: "/img/coffee4.jpg", title: "Aromika Coffee 1 kg", country: "Brazil", price: "9.99$" },
  { img: "/img/coffee5.jpg", title: "Josse Coffee 1 kg", country: "Columbia", price: "17$" },
  { img: "/img/coffee6.webp", title: "Deep Coffee 1 kg", country: "Kenya", price: "6.94$" },
];

function Ourcoffe() {
  const [searchValue, setSearchValue] = React.useState("");

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };
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
        <Search onChangeSearchValue={onChangeSearchValue} searchValue={searchValue} />
        <Filter />
      </div>
      <Link to="/aboutcoffee">
        <div className={styles.coffeeContent}>
          {coffee
            .filter((coffee) => coffee.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, i) => (
              <CoffeeCard key={i} img={item.img} title={item.title} country={item.country} price={item.price} />
            ))}
        </div>
      </Link>
    </motion.div>
  );
}

export default Ourcoffe;
