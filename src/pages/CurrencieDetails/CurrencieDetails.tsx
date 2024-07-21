import React from "react";
import styles from "./CurrencieDetails.module.scss";
import CryptoGraph from "../../components/CryptoGraph/CryptoGraph";

const CurrencieDetails: React.FC = () => {
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
          <div className={styles["main__dashboard__cryptoTrend"]}>
            <div className={styles["main__dashboard__cryptoTrend-cryptoBox"]}>
              <p>Bitcoin(BTC)</p>
              <p>CurrentPrice: $45,000</p>
              <p>24h Change: +3.5%</p>
              <p>Market Cap: $850B</p>
            </div>
            <div className={styles["main__dashboard__cryptoTrend-cryptoBox"]}>
              <p>Ethereum(ETH)</p>
              <p>CurrentPrice: $45,000</p>
              <p>24h Change: +3.5%</p>
              <p>Market Cap: $850B</p>
            </div>
            <div className={styles["main__dashboard__cryptoTrend-cryptoBox"]}>
              <p>Cardano(ADA)</p>
              <p>CurrentPrice: $45,000</p>
              <p>24h Change: +3.5%</p>
              <p>Market Cap: $850B</p>
            </div>
          </div>
          <div className={styles["main__dashboard__cryptoTable"]}>
            <CryptoGraph />
          </div>
        </section>
      </main>
    </>
  );
};

export default CurrencieDetails;
