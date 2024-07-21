import React from "react";
import { Crypto } from "../../assets/CryptoDataSets";

interface CryptoTrendProps {
  styles: CSSModuleClasses;
  cryptos: Crypto[];
}

const CryptoTrend: React.FC<CryptoTrendProps> = ({ styles, cryptos }) => {
  return (
    <>
      <div className={styles["main__dashboard__cryptoTrend"]}>
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className={styles["main__dashboard__cryptoTrend-cryptoBox"]}
          >
            <p>
              {cryptos[i].name}({cryptos[i].symbol})
            </p>
            <p>
              CurrentPrice: <b>{cryptos[i].price}</b>
            </p>
            <p>
              24h Volume: <b>{cryptos[i].volume_24h}</b>
            </p>
            <p>
              Market Cap: <b>{cryptos[i].market_cap}</b>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CryptoTrend;
