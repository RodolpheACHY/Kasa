import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Countries from '../components/Countries';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <Countries />
            {/* <h1>ACCUEIL</h1> */}
        </div>
    );
};

export default Home;