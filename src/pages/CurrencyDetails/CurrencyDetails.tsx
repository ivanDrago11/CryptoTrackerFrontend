import React, { useEffect, useState } from "react";
import styles from "./CurrencyDetails.module.scss";
import CryptoGraph from "../../components/CryptoGraph/CryptoGraph";
import CryptoWalletList from "../../components/CryptoWalletList/CryptoWalletList";
import { Wallet } from "../../store/cryptoWalletSlice";
import { useDispatch } from "react-redux";
import { setPage } from "../../store/headerSlice";
import CryptoTrend from "../../components/CryptoTrends/CryptoTrend";
import {
  Crypto,
  CryptoData1,
  CryptoData2,
  CryptoData3,
  CryptoData4,
  CryptoData5,
  CryptoData6,
  CryptoData7,
  CryptoData8,
  CryptoData9,
  CryptoData10,
} from "../../assets/CryptoDataSets";
import { CustomModal } from "../../components/CustomModal/CustomModal";
import { useLocation } from "react-router-dom";

const CurrencyDetails: React.FC = () => {
  const location = useLocation();
  const { crypto } = location.state || {};
  const dispatch = useDispatch();
  dispatch(setPage("/currencyDetails"));
  // console.log(crypto);

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [modalType, setModalType] = useState("");
  const [listName, setListName] = useState({ id: 0, name: "" });
  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null);
  const [isSideBarVisible, setIsSideBarVisible] = useState(true);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [cryptos, setCryptos] = useState<Crypto[]>(CryptoData1);
  const [currentDataSet, setCurrentDataSet] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Cycle through the datasets
      setCurrentDataSet((prevDataSet) => (prevDataSet % 10) + 1);
    }, 10000000); // Update every 5 seconds
    return () => clearInterval(interval);
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    switch (currentDataSet) {
      case 1:
        setCryptos(CryptoData1);
        break;
      case 2:
        setCryptos(CryptoData2);
        break;
      case 3:
        setCryptos(CryptoData3);
        break;
      case 4:
        setCryptos(CryptoData4);
        break;
      case 5:
        setCryptos(CryptoData5);
        break;
      case 6:
        setCryptos(CryptoData6);
        break;
      case 7:
        setCryptos(CryptoData7);
        break;
      case 8:
        setCryptos(CryptoData8);
        break;
      case 9:
        setCryptos(CryptoData9);
        break;
      case 10:
        setCryptos(CryptoData10);
        break;
      default:
        setCryptos(CryptoData1);
        break;
    }
  }, [currentDataSet]);
  return (
    <>
      <main
        className={`${styles.main}
        ${
          isSideBarVisible && windowDimensions.width > 1040
            ? styles["main--expanded"]
            : ""
        }
        ${
          windowDimensions.width < 1040
            ? styles["main--expanded--responsive"]
            : ""
        }`}
      >
        {/* MANAGE LIST FUNCTIONALITY */}
        <section
          className={`${styles["main__leftSideBar"]}
            ${
              windowDimensions.width < 1040
                ? styles["main__leftSideBar--responsive"]
                : ""
            } ${
            windowDimensions.width < 1040 && !isSideBarVisible
              ? styles["main__leftSideBar--responsive-open"]
              : ""
          }`}
        >
          <CryptoWalletList
            isSideBarVisible={isSideBarVisible}
            setIsSideBarVisible={setIsSideBarVisible}
            setShowModal={setShowModal}
            setModalType={setModalType}
            setIsEditing={setIsEditing}
            setListName={setListName}
            setSelectedWallet={setSelectedWallet}
          />
        </section>
        <section className={styles["main__dashboard"]}>
          <CryptoTrend cryptos={cryptos} styles={styles} />
          <div className={styles["main__dashboard__cryptoName"]}>
            <h1>{crypto.name}</h1>
          </div>
          <CryptoGraph crypto={crypto} />
          <CustomModal
            showModal={showModal}
            setShowModal={setShowModal}
            isEditing={isEditing}
            modalType={modalType}
            setListName={setListName}
            listName={listName}
            selectedWallet={selectedWallet}
            setSelectedWallet={setSelectedWallet}
          />
        </section>
      </main>
    </>
  );
};

export default CurrencyDetails;
