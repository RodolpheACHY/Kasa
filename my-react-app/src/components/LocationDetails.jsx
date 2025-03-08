import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Carrousel from "./Carrousel";

const LocationDetails = () => {
  const { id } = useParams(); // Récupère l'ID dans l'URL
  console.log("ID du logement :", id);
  const [location, setLocation] = useState(null);
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    axios
      .get("/logements.json") // Charge tous les logements
      .then((response) => {
        const location = response.data.find((l) => l.id === id); // Cherche le logement par ID
        setLocation(location);
        if (location && location.pictures) {
            setPictures(location.pictures)
        }
      })
      .catch((error) => console.error("Erreur de chargement :", error));
  }, [id]);

  if (!location) return <p>Chargement...</p>;

  return (
    <div>
      <Carrousel pictures={pictures} />
      <h1>Détails de la location {id}</h1>
      <img src={location.cover} alt={`Photo de ${location.title}`} />
      <p>{location.description}</p>
      {/* Ici, tu peux afficher les détails du logement en fonction de `id` */}
    </div>
  );
};

export default LocationDetails;
