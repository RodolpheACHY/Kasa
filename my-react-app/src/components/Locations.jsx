import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import styles from "./locations.module.scss"; // pour ajouter un style au container
import locationsData from "../data/logements.json"; // Vérifie que le JSON est bien importé

const Locations = () => {
  const [locations, setLocations] = useState([]);

  /*useEffect(() => {
    axios
      .get("/logements.json")
      .then((response) => setLocations(response.data))
      .catch((error) =>
        console.error("Erreur lors de la récupération :", error)
      );
  }, []); */

  useEffect(() => {
    setLocations(locationsData); // Charge les données
  }, []);

  return (
    <div>
      <ul className={styles.locations}>
        {locations.map((location) => (
          <Card key={location.id} location={location} /> // pour passer `location` en prop
        ))}
      </ul>
    </div>
  );
};

export default Locations;
