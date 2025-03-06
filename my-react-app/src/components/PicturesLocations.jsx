import React, { useEffect, useState } from "react";
import axios from "axios";
import Carrousel from "./Carrousel";

const PicturesLocations = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    axios.get("/logements.json").then((response) => {
      setLogements(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Galerie de logements</h1>
      {logements.map((logement) => (
        <div key={logement.id}>
          <h2>{logement.title}</h2>
          <Carrousel pictures={logement.pictures} />{" "}
          {/* Passer `pictures` en prop */}
        </div>
      ))}
    </div>
  );
};

export default PicturesLocations;
