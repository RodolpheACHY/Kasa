import Header from "../components/Header";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import Hero from "../components/Hero";
import Collapse from "../components/Collapse";
import styles from "./aboutPage.module.scss";
import backgroundImage from "/kalen-emsley-Bkci_8qcdvQ-unsplash_2.png"

const AboutPage = () => {
  
  return (
    <div className={styles.aboutPage}>
      <Header />
      <Hero backgroundImage={backgroundImage} />
      <div className={styles.collapseContainer}>
        {/* Collapse 1 : Fiabilité */}
        <Collapse
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, ettoutes les informations sont régulièrement vérifiées par nos équipes"
          width="80%"
          customClass={styles.specialCollapse}
        />

        {/* Collapse 2 : Respect */}
        <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de la plateforme"
          width="80%"
          customClass={styles.specialCollapse}
        />

        {/* ✅ Collapse 3 : Service */}
        <Collapse
          title="Service"
          content="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque intercation, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance"
          width="80%"
          customClass={styles.specialCollapse}
        />

        {/* ✅ Collapse 4 : Sécurité */}
        <Collapse
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          width="80%"
          customClass={styles.specialCollapse}
        />
      </div>
      <Footer />
    </div>
  );
};

AboutPage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Vérifie que `id` est bien une string
    })
  ).isRequired,
};

export default AboutPage;
