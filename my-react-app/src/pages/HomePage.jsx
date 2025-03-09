import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Locations from "../components/Locations";
import Footer from "../components/Footer";
import PropTypes from "prop-types";

const HomePage = ({data}) => {
  return (
    <div>
      <Header />
      <Hero />
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
