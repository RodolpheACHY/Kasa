import { useParams } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import StarRating from "./StarRating";
import Collapse from "./Collapse";
import styles from "./locationDetails.module.scss";

const LocationDetails = ({ data }) => {
  const { id } = useParams(); // Récupère l'ID dans l'URL
  console.log("ID du logement :", id);
  
  const location = data.find((l) => l.id === id); // Cherche le logement par ID

  if (!location) {
    return <p> Logement introuvable !!</p>
  };

  return (
    <div>
      {/* <Carrousel pictures={pictures} /> */}
      <div>
        <h1>{location.title}</h1>
        <div>
            <h2>{location.host.name}</h2>
            <img src={location.host.picture} alt={`Photo de ${location.host.picture}`}></img>
        </div>
      </div>
      <h2>{location.location}</h2>
      <div>
        <h3>{location.tags}</h3>
        <StarRating rating={location.rating} />  {/* Affiche les étoiles */}
      </div>
      <div className={styles.collapsesContainer}>
        {/* Collapse pour afficher la description (paragraphe) */}
        <Collapse title="Description" content={location.description} />
        {/* Collapse pour afficher les équipements (liste) */}
        <Collapse title="Équipements" content={location.equipments} />
      </div>
      {/* <img src={location.cover} alt={`Photo de ${location.title}`} /> */}
      {/* <p>{location.description}</p> */}
      {/* Ici, tu peux afficher les détails du logement en fonction de `id` */}
    </div>
  );
}

// ✅ Ajout de PropTypes pour valider les `props`
LocationDetails.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LocationDetails;