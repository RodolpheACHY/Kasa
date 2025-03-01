import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="header__navigation">
      <ul className="header__list">
        <li className="header__item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "header__link header__link--active" : "header__link"
            }
          >
            Accueil
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "header__link header__link--active" : "header__link"
            }
          >
            À propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
