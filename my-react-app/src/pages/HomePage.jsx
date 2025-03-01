import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Locations from "../components/Locations";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <main>
        <Locations />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
