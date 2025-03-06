import { useState } from "react";
import styles from "./carrousel.module.scss"; // Import des styles
import PropTypes from "prop-types"; // Import PropTypes

const Carrousel = ({ pictures }) => {
  // On récupère les images en prop
  const [currentIndex, setCurrentIndex] = useState(0);

  // Vérifier qu'il y a des images pour éviter les erreurs
  if (!pictures || pictures.length === 0) {
    return <p>Aucune image disponible</p>;
  }

  // Fonction pour gérer le clic sur les flèches
  const handleClick = (direction) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = direction === "next" ? prevIndex + 1 : prevIndex - 1;
      if (newIndex < 0) newIndex = pictures.length - 1; // Revient à la dernière image si < 0
      if (newIndex >= pictures.length) newIndex = 0; // Revient à 0 après la dernière
      return newIndex;
    });
  };

  return (
    <div className={styles.carrousel}>
      {/* Bouton précédent */}
      <button
        className={styles.carrousel__arrow}
        onClick={() => handleClick("prev")}
      >
        ❮
      </button>

      {/* Image affichée */}
      <div className={styles.carrousel__imageContainer}>
        <img
          className={styles.carrousel__image}
          src={pictures[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
        />
      </div>

      {/* Bouton suivant */}
      <button
        className={styles.carrousel__arrow}
        onClick={() => handleClick("next")}
      >
        ❯
      </button>
    </div>
  );
};

// Ajout de PropTypes pour éviter l'erreur ESLint
Carrousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carrousel;
