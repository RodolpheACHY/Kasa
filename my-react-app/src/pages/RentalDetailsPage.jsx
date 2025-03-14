import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Footer from "../components/Footer";
import LocationDetails from "../components/LocationDetails";
// import data from "../data/logements.json";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const RentalDetailsPage = ({data}) => {
  const { id } = useParams(); // Récupère l'ID dans l'URL
  console.log("ID du logement :", id);
  
  const location = data.find((logement) => logement.id === id); // Cherche le logement par ID 

  return (
    <div>
      <Header />
      <Carrousel location={location}/>
      <LocationDetails location={location}/>
      <Footer />
    </div>
  );
};

RentalDetailsPage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Vérifie que `id` est bien une string
    })
  ).isRequired,
};

export default RentalDetailsPage;
