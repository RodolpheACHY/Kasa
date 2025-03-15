import { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronDown } from "react-icons/fa"; // Icônes pour l'effet d'ouverture/fermeture
import styles from "./collapse.module.scss"; // Assure-toi d'avoir un fichier SCSS

const Collapse = ({ title, content, width, customClass }) => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <div 
      className={`${styles.collapse} ${customClass}`}  // Permet d'ajouter une classe personnalisée
      style={{ width }}   // Applique la largeur dynamique
    >
      {/* Bouton d’ouverture/fermeture */}
       {/* <div className={styles.collapse__button}> 
       
        <button onClick={() => setIsOpen(!isOpen)} className={styles.collapse__arrow}>
            {isOpen ? <FaChevronDown /> :  <FaChevronUp /> }
        </button>
      </div>   */}
      <button
        className={styles.collapse__button}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}

        {/* ✅ Un seul Chevron avec rotation dynamique */}
        <FaChevronDown
          className={`${styles.collapse__arrow} ${
            isOpen ? styles["collapse__arrow--open"] : ""
          }`}
        />
      </button>


      {/* Contenu qui apparaît quand isOpen = true */}
        <div className={`${styles.collapse__content} ${
          isOpen ? styles["collapse__content--open"] : ""
          }`}>
          <div className={styles.collapse__text}>
            {/* Si `content` est un tableau, affiche une liste, sinon un simple paragraphe */}
            {Array.isArray(content) ? (
                <ul>
                {content.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                </ul>
            ) : (
                <p>{content}</p>
            )}
          </div>
        </ div>
    </div>
  );
};

// ✅ Validation des `props`
Collapse.propTypes = {
  title: PropTypes.string.isRequired, // ✅ Le titre est obligatoire et doit être une string
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired, // ✅ Peut être une string ou un tableau
  width: PropTypes.string, // ✅ Personnalise la hauteur max
  customClass: PropTypes.string, // ✅ Classe CSS personnalisée
};

// ✅ Valeurs par défaut
Collapse.defaultProps = {
    width: "100%",
    customClass: "",
  };

export default Collapse;