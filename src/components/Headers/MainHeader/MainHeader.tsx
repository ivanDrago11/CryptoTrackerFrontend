import React, { useState } from "react";
import styles from "./MainHeader.module.scss";
import cryptoLogo from "../../../assets/images/CryptoLogo.png";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import HeaderItems from "../HeaderItems";
import { useNavigate } from "react-router-dom";

const MainHeader: React.FC = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  // const navigate = useNavigate();

  const page = useSelector((state: RootState) => state.header.page);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <header className={styles.header}>
      <div
        className={styles["header__logo"]}
        onClick={() => navigate("/dashboard")}
      >
        <img
          className={styles["header__logo-image"]}
          src={cryptoLogo}
          alt="Crypto logo"
        />
        CryptoSphere
      </div>
      <nav className={styles["header__navBar"]}>
        {/* HEADER ITEMS */}

        <HeaderItems page={page} styles={styles} />
      </nav>
      <button className={styles["header__toggleButton"]} onClick={toggleMenu}>
        &#9776;
      </button>

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
      </nav>
    </header>
  );
};

export default MainHeader;
