import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.header__navigation}>
      <ul className={styles.header__list}>
        <li className={styles.header__item}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${styles.header__link} ${styles["header__link--active"]}`
                : styles.header__link
            }
          >
            Accueil
          </NavLink>
        </li>
        <li className={styles.header__item}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? `${styles.header__link} ${styles["header__link--active"]}`
                : styles.header__link
            }
          >
            À Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
