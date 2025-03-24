import { Navigate, useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Carrousel from "../../components/carrousel/Carrousel";
import Footer from "../../components/footer/Footer";
import LocationDetails from "../../components/locationDetails/LocationDetails";
import PropTypes from "prop-types";

const RentalDetailsPage = ({data}) => {
  const { id } = useParams(); // Récupère l'ID dans l'URL
  console.log("ID du logement :", id);
  
  const location = data.find((logement) => logement.id === id); // Cherche le logement par ID 

  if (!location) {
    return <Navigate to="*" replace={true} /> ;
  }
  
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
      id: PropTypes.string.isRequired, // Vérifie que `id` est bien une string et il est obligatoire
    })
  ).isRequired,
};

export default RentalDetailsPage;
