import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Locations from "../components/Locations";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import backgroundImage from '/backgroundHero.png'

const HomePage = ({data}) => {
  return (
    <div>
      <Header />
      <Hero
        backgroundImage={backgroundImage}
        title="Chez vous, partout et ailleurs"
      />
      <main>
        <Locations locations={data} />
      </main>
      <Footer />
    </div>
  );
};

HomePage.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default HomePage;
