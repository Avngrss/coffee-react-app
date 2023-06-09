import React, { useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./ourcoffe.module.scss";
import Search from "../components/Search/Search";
import Filter from "../components/Filter/Filter";
import CoffeeCard from "../components/CoffeeCard/CoffeeCard";
import Coffeeheader from "../components/Coffeeheader/Coffeeheader";
import Info from "../components/Info/Info";

import { Link } from "react-router-dom";
import coffeebg from "../assets/img/coffebg.jpg";
import girlImg from "../assets/img/girl.jpg";

const coffee = [
  { img: "img/coffee1.png", title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "8.99$" },
  { img: "img/coffee2.png", title: "Uniflex Coffee 1 kg", country: "Kenya", price: "12$" },
  { img: "img/coffee3.png", title: "Drip Coffee 1 kg", country: "Columbia", price: "6.99$" },
  { img: "img/coffee4.jpg", title: "Aromika Coffee 1 kg", country: "Brazil", price: "9.99$" },
  { img: "img/coffee5.jpg", title: "Josse Coffee 1 kg", country: "Columbia", price: "17$" },
  { img: "img/coffee6.webp", title: "Deep Coffee 1 kg", country: "Kenya", price: "6.94$" },
];

const title = "About our beans";

const text =
  "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went issong that held help face.";
function Ourcoffe() {
  const [searchValue, setSearchValue] = React.useState("");
  const [data, setData] = React.useState([]);
  const [filterItems, setFilterItems] = React.useState([]);

  useEffect(() => {
    setData(coffee);
    setFilterItems([...new Set(coffee.map((item) => item.country))]);
  }, []);

  const filterCoffee = (itemData) => {
    const filterData = coffee.filter((item) => item.country === itemData);
    setData(filterData);
  };

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Coffeeheader text={"Our Coffee"} img={coffeebg} />
      <Info img={girlImg} title={title} text={text} />
      <div className={styles.filterblock}>
        <Search onChangeSearchValue={onChangeSearchValue} searchValue={searchValue} />
        <Filter filterCoffee={filterCoffee} filterItems={filterItems} />
      </div>
      <Link to="/aboutcoffee">
        <div className={styles.coffeeContent}>
          {data
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
