import { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Icônes pour l'effet d'ouverture/fermeture
import styles from "./collapse.module.scss"; // Assure-toi d'avoir un fichier SCSS

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false); // ✅ Gère l’état ouvert/fermé

  return (
    <div className={styles.collapse}>
      {/* Bouton d’ouverture/fermeture */}
      <button className={styles.collapse__button} onClick={() => setIsOpen(!isOpen)}>
        {title}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {/* Contenu qui apparaît quand isOpen = true */}
      {isOpen && (
        <div className={styles.collapse__content}>
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
      )}
    </div>
  );
};

// ✅ Validation des `props`
Collapse.propTypes = {
  title: PropTypes.string.isRequired, // ✅ Le titre est obligatoire et doit être une string
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired, // ✅ Peut être une string ou un tableau
};

export default Collapse;