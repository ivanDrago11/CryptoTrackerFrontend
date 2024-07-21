import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.scss";
import CryptoTable from "../../components/CryptoTable/CryptoTable";
import { useDispatch } from "react-redux";
import { setPage } from "../../store/headerSlice";
import CryptoListsSection from "../../components/CryptoListsSection/CryptoListsSection";
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
} from "../../assets/CryptoDataSets"; // Import the data
import { ModalForm } from "../../components/CustomModal/CustomModal";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  dispatch(setPage("/dashboard"));

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [modalType, setModalType] = useState("form");
  const [listName, setListName] = useState({ id: 0, name: "" });

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
      <main className={styles.main}>
        {/* MANAGE LIST FUNCTIONALITY */}
        <CryptoListsSection
          setShowModal={setShowModal}
          modalType={modalType}
          setModalType={setModalType}
          setIsEditing={setIsEditing}
          setListName={setListName}
        />
        <section className={styles["main__dashboard"]}>
          <CryptoTrend cryptos={cryptos} styles={styles} />
          <CryptoTable cryptos={cryptos} setShowModal={setShowModal} />
          <ModalForm
            showModal={showModal}
            setShowModal={setShowModal}
            isEditing={isEditing}
            modalType={modalType}
            setListName={setListName}
            listName={listName}
          />
        </section>
      </main>
    </>
  );
};

export default Dashboard;
