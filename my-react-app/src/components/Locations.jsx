import React, { useState, useEffect } from "react";
import axios from "axios";

const Locations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get("/logements.json")
      .then((response) => setLocations(response.data))
      .catch((error) =>
        console.error("Erreur lors de la récupération :", error)
      );
  }, []);

  return (
    <div>
      <h1>Liste des locations</h1>
      <ul>
        {locations.map((location) => (
          <li key={location.id}>{location.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Locations;
