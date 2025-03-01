import React from "react";
import styles from "./header.module.scss";

const LogoHeader = () => {
  return (
    <div className={styles.header__logoHeader}>
      {/* les images importées depuis la balise <img> sont accessibles dans « public ». */}
      <img src="/logoHeader.svg" alt="logo Kasa" />
      {/* <img src="./logoHeader.svg" alt="logo Kasa" /> */}
    </div>
  );
};

export default LogoHeader;
