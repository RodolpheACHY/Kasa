import React from "react";
import LogoFooter from "./LogoFooter";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <LogoFooter className={styles.footer__logoFooter} />
        <p className={styles.footer__p}> © 2020 Kasa. All rights reserved </p>
      </footer>
    </div>
  );
};

export default Footer;
