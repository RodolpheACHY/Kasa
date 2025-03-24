import PropTypes from "prop-types";
import StarRating from "../starRating/StarRating";
import Collapse from "../collapse/Collapse";
import styles from "./locationDetails.module.scss";
import Tags from "../tags/Tags";

const LocationDetails = ({ location }) => {
  return (
    <div className={styles.locationDetails}>
       <div className={styles["locationDetails__summary-group"]}>     {/* les [""] permettent de nommer notre classe avec des - */}
        <div className={styles.locationDetails__titleLocTagsContainer}>
            <h1 className={styles.locationDetails__title}>{location.title}</h1>
            <h2 className={styles.locationDetails__location}>{location.location}</h2>
            <Tags tags={location.tags} />  {/* Affiche les tags */}
        </div>
        <div className={styles.locationDetails__ownerInfoStarContainer}>
            <div className={styles.locationDetails__ownerNameImgContainer}>
                <h2 className={styles.locationDetails__ownerName}>{location.host.name}</h2>
                <img className={styles.locationDetails__ownerImg} src={location.host.picture} alt={`Photo de ${location.host.picture}`}></img>
            </div>
            <StarRating rating={location.rating} />  {/* Affiche les étoiles */}
        </div>
      </div>
      <div className={styles.locationDetails__collapsesContainer}>
        {/* Collapse pour afficher la description (paragraphe) */}
        <Collapse title="Description" content={location.description} />
        {/* Collapse pour afficher les équipements (liste) */}
        <Collapse title="Équipements" content={location.equipments} />
      </div>
    </div>
  );
}

// Ajout de PropTypes pour valider les `props`
LocationDetails.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    location: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LocationDetails;