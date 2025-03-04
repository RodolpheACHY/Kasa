import React from "react";
import styles from "./card.module.scss";

const Card = ({ location }) => {
  console.log(location);
  return (
    <li className={styles.card}>
      <img
        className={styles.card__img}
        src={location.cover}
        alt={"photo location " + location.title}
      />
      <h2 className={styles.card__title}>{location.title}</h2>
    </li>
  );
};

export default Card;
