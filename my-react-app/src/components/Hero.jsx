import React from "react";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.hero__h1}>Chez vous, partout et ailleurs</h1>
    </section>
  );
};

export default Hero;
