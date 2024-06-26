import React from "react";
import styles from "./LandingPage.module.scss";
import cryptoLogo from "../../assets/images/CryptoLogo.png";

const LandingPage: React.FC = () => {
  return (
    <div className={styles.landingPage}>
      <header className={styles.header}>
        <div className={styles["header__logo"]}>
          <img className={styles["header__logo-image"]} src={cryptoLogo} />
          CryptoSphere
        </div>
        <nav className={styles["header__nav"]}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        {/* Menu button */}
        {/* <div className={styles["menu-toggle"]}>&#9776;</div> */}
      </header>
      <div id={styles.landingPage}>
        <section id="home">
          <h2>Welcome to Crypto Tracker</h2>
          <p>Track your favorite cryptocurrencies in real-time.</p>
        </section>
        <section id="features">
          <h2>Features</h2>
          <ul>
            <li>Real-time crypto data</li>
            <li>Create custom crypto lists</li>
            <li>Detailed analytics</li>
          </ul>
        </section>
        <section id="about">
          <h2>About Us</h2>
          <p>
            We provide accurate and up-to-date information on cryptocurrencies.
          </p>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Email: support@cryptotracker.com</p>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
