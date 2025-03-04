import React from "react";
import Navigation from "./Navigation";
import LogoHeader from "./LogoHeader";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <LogoHeader className={styles.header__logoHeader} />
        <Navigation className={styles.header__navigation} />
      </header>
    </div>
  );
};

export default Header;
