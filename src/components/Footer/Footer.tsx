import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Crypto Tracker. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
