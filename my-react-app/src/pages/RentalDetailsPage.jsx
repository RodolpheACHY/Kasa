import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Footer from "../components/Footer";
import LocationDetails from "../components/LocationDetails";
import data from "../data/logements.json";

const RentalDetailsPage = () => {
  return (
    <div>
      <Header />
      <Carrousel data={data}/>
      <LocationDetails data={data}/>
      <Footer />
    </div>
  );
};

export default RentalDetailsPage;
