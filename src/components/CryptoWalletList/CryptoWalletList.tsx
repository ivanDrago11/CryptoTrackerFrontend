import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Wallet } from "../../store/cryptoWalletSlice";
import SettingsIcon from "@mui/icons-material/Settings";
import styles from "./CryptoWalletList.module.scss";
import { useNavigate } from "react-router-dom";
import { setPage } from "../../store/headerSlice";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export interface CryptoWalletListProps {
  setIsSideBarVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  isSideBarVisible?: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedWallet: React.Dispatch<React.SetStateAction<Wallet | null>>;
  setListName: React.Dispatch<
    React.SetStateAction<{
      id: number;
      name: string;
    }>
  >;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
}
// CryptoList Component
const CryptoWalletList: React.FC<CryptoWalletListProps> = ({
  setIsSideBarVisible,
  isSideBarVisible,
  setListName,
  setShowModal,
  setIsEditing,
  setModalType,
  setSelectedWallet,
}) => {
  // Redux state and dispatch
  const wallets = useSelector((state: RootState) => state.wallets.wallets);
  // const userId = useSelector((state: RootState) => state.auth.userId);
  const userId = parseInt(JSON.parse(localStorage.getItem("userId")!));
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();

  // Refs and state
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  // const [showModal, setShowModal] = useState(false);

  // states
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState<string | null>(null);
  const [activeListItem, setActiveListItem] = useState<string | null>(null);

  // Toggle dropdown visibility
  const toggleDropdown = (id: string) => {
    setDropdownVisible(dropdownVisible === id ? null : id);
    setActiveListItem(activeListItem === id ? null : id);
  };

  // Handle clicks outside the dropdown to close it
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(null);
      setActiveListItem(null);
    }
  };

  // Add event listener for clicks outside the dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavigation = (page: string, wallet: Wallet) => {
    navigate(page, { state: { wallet: wallet } });
    dispatch(setPage(page));
  };

  return (
    <>
      <section className={styles["manageList"]}>
        <h3 className={styles["manageList-title"]}>Your Wallets</h3>
        <ArrowForwardIosIcon
          onClick={() => setIsSideBarVisible!(!isSideBarVisible)}
          fontSize="small"
          className={`${styles["manageList-arrowIcon"]} ${
            isSideBarVisible ? styles["manageList-arrowIcon--clicked"] : ""
          }`}
        />

        <button
          className={styles["manageList-button"]}
          onClick={() => {
            setListName({ id: -1, name: "" });
            setIsEditing(false);
            setShowModal(true);
            setModalType("addNewWallet");
          }}
        >
          Add New Wallet
        </button>

        {/* List of crypto wallets */}
        <div className={styles["manageList__list"]}>
          {wallets.map((wallet) =>
            wallet.user === userId ? (
              <div
                key={wallet.id}
                className={`${styles["manageList__list__wallet"]} ${
                  activeListItem === wallet.name ? styles.selectedItem : ""
                }`}
                onClick={() => {
                  handleNavigation("/walletView", wallet);
                  setSelectedWallet!(wallet);
                }}
              >
                <a>{wallet.name}</a>
                <SettingsIcon
                  className={styles.icon}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown(wallet.name);
                  }}
                />
                {dropdownVisible === wallet.name && (
                  <div
                    className={`${styles["manageList__list__wallet-options"]} ${
                      dropdownVisible === wallet.name
                        ? styles["manageList__list__wallet-options--show"]
                        : ""
                    }`}
                    ref={dropdownRef}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setListName({ id: wallet.id, name: wallet.name });
                        setIsEditing(true);
                        setDropdownVisible(null);
                        setActiveListItem(null);
                        setModalType("editWalletName");
                        setShowModal(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setListName({ id: wallet.id, name: wallet.name });
                        setDropdownVisible(null);
                        setActiveListItem(null);
                        setModalType("deleteWallet");
                        setShowModal(true);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <></>
            )
          )}
        </div>
        {/* <ModalForm
          showModal={showModal}
          styles={styles}
          handleModal={handleModal}
          handleAddItem={handleAddItem}
          isEditing={isEditing}
          setItem={setItem}
          wallet={wallet} 
          modalType={modalType}        /> */}
      </section>
    </>
  );
};

export default CryptoWalletList;
