import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Card from "../card/Card";
import styles from "./locations.module.scss"; // pour ajouter un style au container

const Locations = ({ locations }) => {
  const navigate = useNavigate(); // Permet de rediriger l'utilisateur
  const handleClick = (id) => {
    navigate(`/rental/${id}`); // Redirige vers la page de détails avec l'ID du logement
  };

  return (
    <div className={styles.container_locations}>
      <ul className={styles.container_locations__locations}>
        {locations.map((location) => (
          <Card
            key={location.id}
            location={location}
            onClick={() => handleClick(location.id)}
          /> // pour passer `location` en prop
        ))}
      </ul>
    </div>
  );
};

// Ajout de PropTypes pour valider les `props`
Locations.propTypes = {
    locations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Locations;
