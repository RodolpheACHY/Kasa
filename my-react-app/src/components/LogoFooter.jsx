import React from "react";

const LogoFooter = () => {
  return (
    <div className="logoFooter">
      {/* les images importées depuis la balise <img> sont accessibles dans « public ». */}
      <img src="/logoFooter.svg" alt="logo Kasa" />
    </div>
  );
};

export default LogoFooter;
