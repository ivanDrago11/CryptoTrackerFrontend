import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__leftSide"]}>
        <div className={styles["footer__leftSide-title"]}>
          <h4>CryptoDash</h4>
          <p>
            Track real-time prices, manage custom lists, and access advanced
            analytics. Join us to take control of your crypto journey with
            confidence.
          </p>
        </div>

        <p>&copy; 2024 CryptoSphere. All rights reserved.</p>
      </div>
      <div className={styles["footer__rightSide"]}>
        <a href="#">⭐ Features</a>
        <a href="#">📝 About</a>
        <a href="#">📞 Contact</a>
        <a href="#">🔑 Login</a>
      </div>
    </footer>
  );
};

export default Footer;
