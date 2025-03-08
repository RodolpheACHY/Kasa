import React from "react";
import styles from "./card.module.scss";
import PropTypes from "prop-types"; // Import PropTypes

const Card = ({ location, onClick }) => {
  console.log(location);
  return (
    <li className={styles.card} onClick={onClick} style={{ cursor: "pointer" }}>
      <img
        className={styles.card__img}
        src={location.cover}
        alt={"photo location " + location.title}
      />
      <h2 className={styles.card__title}>{location.title}</h2>
    </li>
  );
};

// Ajout de PropTypes pour éviter l'erreur ESLint
Card.propTypes = {
  location: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func,
};

export default Card;
