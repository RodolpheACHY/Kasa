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
  location: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  }).isRequired,   // Vérifie que location est un objet, mais ne force aucune clé
  onClick: PropTypes.func.isRequired,  // Vérifie que location est une fonction
};

export default Card;
