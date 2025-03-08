import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "./Card";
import styles from "./locations.module.scss"; // pour ajouter un style au container
// import locationsData from "../data/logements.json";  Vérifie que le JSON est bien importé

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const navigate = useNavigate(); // Permet de rediriger l'utilisateur

  useEffect(() => {
    axios
      .get("/logements.json")
      .then((response) => setLocations(response.data))
      .catch((error) =>
        console.error("Erreur lors de la récupération :", error)
      );
  }, []);

  /*
  useEffect(() => {   //marche aussi 
    setLocations(locationsData); // Charge les données
  }, []); */

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

export default Locations;
