import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  addWalletThunk,
  updateWalletThunk,
  Wallet,
} from "../../store/cryptoWalletSlice";
import styles from "./CustomModal.module.scss";
import { Crypto } from "../../assets/CryptoDataSets";

export interface CustomModalProps {
  showModal: boolean;
  isEditing: boolean;
  modalType: string;
  selectedCrypto: Crypto | null;
  setSelectedCrypto?: React.Dispatch<React.SetStateAction<Crypto | null>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedWallet: Wallet | null;
  setSelectedWallet: React.Dispatch<React.SetStateAction<Wallet | null>>;
  listName: {
    id: number;
    name: string;
  };
  setListName: React.Dispatch<
    React.SetStateAction<{
      id: number;
      name: string;
    }>
  >;
}

export const CustomModal: React.FC<CustomModalProps> = ({
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
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
  // Static data (for demo purposes)
  const userId = 1;
  // const cryptos = [1,2,3];

  const handleSelectWallet = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedWalletName = event.target.value;
    const selectedWallet =
      wallets.find((wallet) => wallet.name === selectedWalletName) || null;
    setSelectedWallet(selectedWallet);
    console.log("Selected Wallet:", selectedWallet);
  };

  const handleAddItem = async (event: React.FormEvent) => {
    setShowModal(false);
    const { id, name } = listName;

    switch (modalType) {
      case "addCryptoToWallet": {
        event.preventDefault();
        const updatedCryptos = [...selectedWallet!.cryptos, selectedCrypto!.id];
        await dispatch(
          updateWalletThunk({
            id: selectedWallet!.id,
            name: selectedWallet!.name,
            user: userId,
            cryptos: updatedCryptos,
          })
        );
        setListName({ id: -1, name: "" });
        setSelectedWallet(null);

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
            user: userId,
            cryptos: updatedCryptos,
          })
        );
        console.log(response);
        break;
      }

      case "addNewWallet": {
        event.preventDefault();
        if (name.trim() !== "") {
          const response = await dispatch(
            addWalletThunk({
              id: id,
              name: name,
              user: userId,
              cryptos: [],
            })
          );
          console.log(response);
          setListName({ id: -1, name: "" });
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
              user: userId,
              cryptos: [],
            })
          );
          console.log(response);
          setListName({ id: -1, name: "" });
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
            value={listName.name}
            className={styles.customInput}
            onChange={(e) =>
              setListName((prevData) => ({ ...prevData, name: e.target.value }))
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
            {wallets.map((wallet, i) => (
              <option key={i} value={wallet.name}>
                {wallet.name}
              </option>
            ))}
          </select>
          <button type="submit">Add to Your Wallet</button>
        </form>
      ) : (
        showModal &&
        modalType === "deleteCryptoFromWallet" && (
          <form onSubmit={handleAddItem} className={styles.modalForm}>
            <label htmlFor="name">
              Do you want to delete 'crypto' from 'wallet'?
            </label>
            <div className={styles.deleteModal}>
              <button type="submit">YES</button>
              <button type="button" onClick={() => setShowModal(false)}>
                NO
              </button>
            </div>
          </form>
        )
      )}
    </>
  );
};
