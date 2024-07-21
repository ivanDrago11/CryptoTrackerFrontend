import React, { useState } from "react";
import styles from "./LoginHeader.module.scss";
import cryptoLogo from "../../../assets/images/CryptoLogo.png";
import { useNavigate } from "react-router-dom";

const MainHeader: React.FC = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles["header__leftSide"]}>
        <div onClick={() => navigate("/")} className={styles["header__logo"]}>
          <img
            className={styles["header__logo-image"]}
            src={cryptoLogo}
            alt="Crypto logo"
          />
          CryptoSphere
        </div>
        {/* <nav className={styles["header__navBar"]}>
          <a href="#home">Home</a>
          <a href="#about">Dashboard</a>
          <a href="#services">Market</a>
          <a href="#contact">Profile</a>
        </nav> */}
      </div>
      {/* <button className={styles["header__logoutButton"]} onClick={toggleMenu}>
        Logout
      </button>

      <button className={styles["header__toggleButton"]} onClick={toggleMenu}>
        &#9776;
      </button> */}

      {/* SIDEBAR SECTION */}
      <nav
        className={` ${styles["header__sideBar"]} ${
          isSideBarOpen ? styles["header__sideBar--open"] : ""
        }`}
      >
        <a
          href="#"
          className={styles["header__sideBar__toggleButton"]}
          onClick={toggleMenu}
        >
          &#9776;
        </a>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <a href="#contact">Logout</a>
      </nav>
    </header>
  );
};

export default MainHeader;
