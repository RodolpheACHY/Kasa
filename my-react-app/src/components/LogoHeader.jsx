import React from "react";
import styles from "./header.module.scss";
import PropTypes from "prop-types"; // Import PropTypes

const LogoHeader = ({ noMargin }) => {
  return (
    <div 
      className={`${styles.header__logoHeader} ${
        noMargin ? styles["header__logoHeader--noMargin"] : ""
      }`}
    >
      {/* les images importées depuis la balise <img> sont accessibles dans « public ». */}
      <img src="/logoHeader.svg" alt="logo Kasa" />
      {/* <img src="./logoHeader.svg" alt="logo Kasa" /> */}
    </div>
  );
};

LogoHeader.propTypes = {
  noMargin: PropTypes.bool.isRequired,
};

export default LogoHeader;
