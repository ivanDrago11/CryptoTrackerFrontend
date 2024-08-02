import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  addWalletThunk,
  deleteWalletThunk,
  updateWalletThunk,
  Wallet,
} from "../../store/cryptoWalletSlice";
import styles from "./CustomModal.module.scss";
import { Crypto } from "../../assets/CryptoDataSets";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface CustomModalProps {
  showModal: boolean;
  message?: string;
  isEditing?: boolean;
  modalType: string;
  selectedCrypto?: Crypto | null;
  setSelectedCrypto?: React.Dispatch<React.SetStateAction<Crypto | null>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedWallet?: Wallet | null;
  setSelectedWallet?: React.Dispatch<React.SetStateAction<Wallet | null>>;
  listName?: {
    id: number;
    name: string;
  };
  setListName?: React.Dispatch<
    React.SetStateAction<{
      id: number;
      name: string;
    }>
  >;
}

export const CustomModal: React.FC<CustomModalProps> = ({
  message,
  showModal,
  setShowModal,
  listName,
  setListName,
  isEditing,
  modalType,
  selectedCrypto,
  setSelectedWallet,
  selectedWallet,
}) => {
  const wallets = useSelector((state: RootState) => state.wallets.wallets);
  const walletNames: string[] = [];
  const userId = parseInt(JSON.parse(localStorage.getItem("userId")!));
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
  const navigate = useNavigate();
  // Static data (for demo purposes)
  // const cryptos = [1,2,3];

  useEffect(() => {
    if (modalType !== "confirmationMessage") {
      setSelectedWallet!(wallets[0]);
    }
  }, []);

  const handleSelectWallet = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedWalletName = event.target.value;
    const selectedWallet =
      wallets.find((wallet) => wallet.name === selectedWalletName) || null;
    setSelectedWallet!(selectedWallet);
    console.log("Selected Wallet:", selectedWallet);
  };

  const handleAddItem = async (event: React.FormEvent) => {
    wallets.map((wallet) => {
      wallet.user === userId && walletNames.push(wallet.name);
    });
    setShowModal(false);
    const { id, name } = listName!;

    switch (modalType) {
      case "addCryptoToWallet": {
        event.preventDefault();
        const updatedCryptos = [...selectedWallet!.cryptos, selectedCrypto!.id];
        await dispatch(
          updateWalletThunk({
            id: selectedWallet!.id,
            name: selectedWallet!.name,
            user: userId!,
            cryptos: updatedCryptos,
          })
        );
        setListName!({ id: -1, name: "" });
        setSelectedWallet!(null);

        break;
      }

      case "deleteCryptoFromWallet": {
        const updatedCryptos = selectedWallet!.cryptos.filter(
          (crypto) => crypto !== selectedCrypto!.id
        );
        const response = await dispatch(
          updateWalletThunk({
            id: selectedWallet!.id,
            name: selectedWallet!.name,
            user: userId!,
            cryptos: updatedCryptos,
          })
        );
        console.log(response);
        break;
      }

      case "deleteWallet": {
        navigate("/dashboard");
        await dispatch(deleteWalletThunk({ id }));
        setListName!({ id: -1, name: "" });
        break;
      }

      case "addNewWallet": {
        event.preventDefault();
        console.log(name);
        console.log(walletNames);
        console.log(walletNames.some((walletName) => walletName === name));
        if (!walletNames.some((walletName) => walletName === name)) {
          if (name.trim() !== "") {
            const response = await dispatch(
              addWalletThunk({
                id: id,
                name: name,
                user: userId!,
                cryptos: [],
              })
            );
            console.log(response);
            setListName!({ id: -1, name: "" });
          }
        } else {
          alert("Wallet already exists");
        }
        break;
      }

      case "editWalletName": {
        event.preventDefault();
        if (name.trim() !== "") {
          const response = await dispatch(
            updateWalletThunk({
              id: id,
              name: name,
              user: userId!,
              cryptos: [],
            })
          );
          console.log(response);
          setListName!({ id: -1, name: "" });
        }
        break;
      }

      default:
        break;
    }
  };

  return (
    <>
      {/* Modal background */}
      {showModal && (
        <div
          className={styles.modalBackground}
          onClick={() => setShowModal(false)}
        ></div>
      )}

      {/* Modal form for adding new items */}
      {showModal &&
      (modalType === "addNewWallet" || modalType === "editWalletName") ? (
        <form onSubmit={handleAddItem} className={styles.modalForm}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={listName!.name}
            className={styles.customInput}
            onChange={(e) =>
              setListName!((prevData) => ({
                ...prevData,
                name: e.target.value,
              }))
            }
          />
          <button type="submit">
            {isEditing ? "Edit Wallet" : "Add Wallet"}
          </button>
        </form>
      ) : showModal && modalType === "addCryptoToWallet" ? (
        <form onSubmit={handleAddItem} className={styles.modalForm}>
          <label htmlFor="name">Select your wallet:</label>
          <select className={styles.customInput} onChange={handleSelectWallet}>
            {wallets.map((wallet, i) =>
              wallet.user === userId ? (
                <option key={i} value={wallet.name}>
                  {wallet.name}
                </option>
              ) : (
                <></>
              )
            )}
          </select>
          <button type="submit">Add to Your Wallet</button>
        </form>
      ) : (showModal && modalType === "deleteCryptoFromWallet") ||
        (showModal && modalType === "deleteWallet") ? (
        <form onSubmit={handleAddItem} className={styles.modalForm}>
          <label htmlFor="name">
            {modalType === "deleteCryptoFromWallet"
              ? `Are you sure do you want to delete this crypto?`
              : "Do you want to delete your wallet?"}
          </label>
          <div className={styles.deleteModal}>
            <button type="submit">YES</button>
            <button type="button" onClick={() => setShowModal(false)}>
              NO
            </button>
          </div>
        </form>
      ) : (
        showModal &&
        modalType === "confirmationMessage" && (
          <form className={styles.modalForm}>
            <label htmlFor="name">{message}</label>
            <div className={styles.deleteModal}>
              <button type="button" onClick={() => setShowModal(false)}>
                OK
              </button>
            </div>
          </form>
        )
      )}
    </>
  );
};
