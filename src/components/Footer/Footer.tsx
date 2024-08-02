import React from "react";
import styles from "./Footer.module.scss";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import ArticleIcon from "@mui/icons-material/Article";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";

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
        <a href="#">
          <div>
            <StarPurple500Icon className={styles.icon} />
            <p>Features</p>
          </div>
        </a>
        <a href="#">
          <div>
            <ArticleIcon className={styles.icon} />
            <p>About</p>
          </div>
        </a>
        <a href="#">
          <div>
            <LocalPhoneIcon className={styles.icon} />
            <p>Contact</p>
          </div>
        </a>
        <a href="#">
          <div>
            <FacebookIcon className={styles.icon} />
            <p>Facebook</p>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
