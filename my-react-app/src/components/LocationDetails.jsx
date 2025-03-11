//import { useParams } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import StarRating from "./StarRating";
import Collapse from "./Collapse";
import styles from "./locationDetails.module.scss";

const LocationDetails = ({ location }) => {
  /* const { id } = useParams(); // Récupère l'ID dans l'URL
  console.log("ID du logement :", id);
  
  const location = data.find((l) => l.id === id); // Cherche le logement par ID */

  if (!location) {
    return <p> Logement introuvable !!</p>
  };

  return (
    <div className={styles.locationDetails}>
      {/* <Carrousel pictures={pictures} /> */}
      <div className={styles.locationDetails__titleOwnerContainer}>
        <h1 className={styles.locationDetails__titleOwnerContainer__title}>{location.title}</h1>
        <div className={styles.locationDetails__titleOwnerContainer__ownerInfoImgContainer}>
            <h2 className={styles.locationDetails__titleOwnerContainer__ownerInfoImgContainer__name}>{location.host.name}</h2>
            <img className={styles.locationDetails__titleOwnerContainer__ownerInfoImgContainer__picture} src={location.host.picture} alt={`Photo de ${location.host.picture}`}></img>
        </div>
      </div>
      <h2 className={styles.locationDetails__location}>{location.location}</h2>
      <div className={styles.locationDetails__tagsStarRatingContainer}>
        <h3 className={styles.locationDetails__tags}>{location.tags}</h3>
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
    location: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LocationDetails;