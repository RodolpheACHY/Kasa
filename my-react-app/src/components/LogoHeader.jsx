import React from "react";

const LogoHeader = () => {
  return (
    <div className="header__logoHeader">
      {/* les images importées depuis la balise <img> sont accessibles dans « public ». */}
      <img src="/logoHeader.svg" alt="logo Kasa" />
      {/* <img src="./logoHeader.svg" alt="logo Kasa" /> */}
    </div>
  );
};

export default LogoHeader;
