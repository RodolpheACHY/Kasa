import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const LocationDetails = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id"); // Récupère l'ID dans l'URL
  console.log("ID du logement :", id);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    axios
      .get("/logements.json") // Charge tous les logements
      .then((response) => {
        //const locationFound = response.data.find((l) => l.id === id); // Cherche le logement par ID
        const location = response.data.find((l) => l.id === id); // Cherche le logement par ID
        setLocation(location);
      })
      .catch((error) => console.error("Erreur de chargement :", error));
  }, [id]);

  if (!location) return <p>Chargement...</p>;

  return (
    <div>
      <h1>Détails de la location {id}</h1>
      <img src={location.cover} alt={`Photo de ${location.title}`} />
      <p>{location.description}</p>
      {/* Ici, tu peux afficher les détails du logement en fonction de `id` */}
    </div>
  );
};

export default LocationDetails;
