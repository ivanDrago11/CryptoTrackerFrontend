import React from "react";
import styles from "./ListView.module.scss";
import CryptoTable from "../../components/CryptoTable/CryptoTable";

const ListView: React.FC = () => {
  return (
    <>
      <main className={styles.main}>
        <section className={styles["main__manageList"]}>
          <h3 className={styles["main__manageList-title"]}>Manage Lists</h3>
          <button className={styles["main__manageList-button"]}>
            Add New List
          </button>
          <div className={styles["main__manageList-list"]}>
            <ul>
              <li>Bitcoin Watchlist</li>
              <li>Altcoin Watchlist</li>
              <li>DeFi Projects</li>
              <li>NFTs</li>
            </ul>
          </div>
        </section>
        <section className={styles["main__dashboard"]}>
          <div className={styles["main__dashboard__cryptoTitle"]}>
            Bitcoin Watchlist
          </div>
          <div className={styles["main__dashboard__cryptoTable"]}>
            <CryptoTable />
          </div>
        </section>
      </main>
    </>
  );
};

export default ListView;
