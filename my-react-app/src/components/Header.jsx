import React from "react";
import Navigation from "./Navigation";
import LogoHeader from "./LogoHeader";
import styles from "./header.module.scss";
import PropTypes from "prop-types"; // Import PropTypes

const Header = ({ noMargin }) => {
  return (
    <div>
      <header className={styles.header}>
        <LogoHeader 
          className={styles.header__logoHeader}
          noMargin={noMargin}
       />
        <Navigation className={styles.header__navigation} />
      </header>
    </div>
  );
};

Header.propTypes = {
  noMargin: PropTypes.bool.isRequired,
};
export default Header;
