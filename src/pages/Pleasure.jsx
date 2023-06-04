import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CoffeeCard from "../components/CoffeeCard/CoffeeCard";
import styles from "./ourcoffe.module.scss";

import Coffeeheader from "../components/Coffeeheader/Coffeeheader";
import Info from "../components/Info/Info";
import pleasurebg from "../assets/img/pleasurebg.png";
import hotcoffee from "../assets/img/hotcoffee.png";

const title = "About our goods";
const text =
  "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.Afraid at highly months do things on at. Situation recommend objection do intentionso questions. As greatly removed calling pleased improve an. Last ask him cold feelmet spot shy want. Children me laughing we prospect answered followed. At it wentis song that held help face.";
const coffee = [
  { img: "img/coffee1.png", title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "8.99$" },
  { img: "img/coffee2.png", title: "Uniflex Coffee 1 kg", country: "Kenya", price: "12$" },
  { img: "img/coffee3.png", title: "Drip Coffee 1 kg", country: "Columbia", price: "6.99$" },
  { img: "img/coffee4.jpg", title: "Aromika Coffee 1 kg", country: "Brazil", price: "9.99$" },
  { img: "img/coffee5.jpg", title: "Josse Coffee 1 kg", country: "Columbia", price: "17$" },
  { img: "img/coffee6.webp", title: "Deep Coffee 1 kg", country: "Kenya", price: "6.94$" },
];
function Pleasure() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Coffeeheader text={"For your pleasure"} img={pleasurebg} />
      <Info title={title} text={text} img={hotcoffee} />
      <Link to="aboutcoffee">
        <div className={styles.coffeeContent}>
          {coffee.map((item, i) => (
            <CoffeeCard key={i} img={item.img} title={item.title} country={item.country} price={item.price} />
          ))}
        </div>
      </Link>
    </motion.div>
  );
}

export default Pleasure;
