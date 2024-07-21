import React, { useState } from "react";
import styles from "./NavBar.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles["navbar__logo"]}>Logo</div>
      <nav
        className={`${styles["navbar__menu"]} ${
          isOpen ? styles["navbar__menu--open"] : ""
        }`}
      >
        <a href="#home" className={styles["navbar__link"]}>
          Home
        </a>
        <a href="#about" className={styles["navbar__link"]}>
          About
        </a>
        <a href="#services" className={styles["navbar__link"]}>
          Services
        </a>
        <a href="#contact" className={styles["navbar__link"]}>
          Contact
        </a>
      </nav>
      <button className={styles["navbar__toggle"]} onClick={toggleMenu}>
        &#9776;
      </button>
    </header>
  );
};

export default Navbar;
