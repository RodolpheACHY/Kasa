import { useState } from "react";
import styles from "./carrousel.module.scss";
import PropTypes from "prop-types";

const Carrousel = ({ location }) => {
  // On récupère les images en prop
  const [currentIndex, setCurrentIndex] = useState(0);
  const pictures = location?.pictures || [];   // verifie si location existe avant d'accéder à pictures et si ce n'est pas le cas on assigne un tableau vide

  // Vérifier qu'il y a des images pour éviter les erreurs
  if (!pictures || pictures.length === 0) {
    return <p>Aucune image disponible</p>;
  }

  const showNavigation = pictures.length > 1;

  // Fonction pour gérer le clic sur les flèches
  const handleClick = (direction) => {

    if (!showNavigation) return;

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
      {showNavigation && (
        <button
          className={styles.carrousel__arrow}
          onClick={() => handleClick("prev")}
        >
          <img src="/iconPrevious.svg" alt="image precedent icon" />
        </button>
      )}

      {/* Image affichée */}
      <div className={styles.carrousel__imageContainer}>
        <img
          className={styles.carrousel__image}
          src={pictures[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
        />

        {/* numérotation des slides dynamique*/}
        {showNavigation && (
          <div className={styles.carrousel__imageCounter}>
              {currentIndex + 1} / {pictures.length}
          </div>
        )}
      </div>

      {/* Bouton suivant */}
      {showNavigation && (
        <button
          className={styles.carrousel__arrow}
          onClick={() => handleClick("next")}
        >
          <img src="/iconNext.svg" alt="image next icon" />
        </button>
      )}
    </div>
  );
};

Carrousel.propTypes = {
  location: PropTypes.shape({
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired, // Vérifie que `pictures` est un tableau de strings
  }).isRequired,
  data: PropTypes.array.isRequired,
};

export default Carrousel;
