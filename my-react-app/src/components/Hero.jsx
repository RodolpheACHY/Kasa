import styles from "./hero.module.scss";
import PropTypes from "prop-types";

const Hero = ({ text, backgroundImage }) => {
  return (
    <section 
      className={styles.hero}
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`
      }}
    >
      {text && <h1 className={styles.hero__h1}>{text}</h1>}
    </section>
  );
};

// ✅ Définition des props attendues
Hero.propTypes = {
  backgroundImage: PropTypes.string.isRequired, // L’image de fond est obligatoire
  text: PropTypes.string,
};

export default Hero;
