import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { RootState } from "../../store";
import { addItemThunk, updateItemThunk } from "../../store/cryptoListSlice";
import styles from "./CustomModal.module.scss";

export interface ModalFormProps {
  showModal: boolean;
  isEditing: boolean;
  modalType: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
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

export const ModalForm: React.FC<ModalFormProps> = ({
  showModal,
  setShowModal,
  listName,
  setListName,
  isEditing,
  modalType,
}) => {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
  // Static data (for demo purposes)
  const userId = 1;
  const cryptos = [1, 2, 3];

  const handleAddItem = async (event: React.FormEvent) => {
    event.preventDefault();
    setShowModal(false);
    const { id, name } = listName;
    if (isEditing == false) {
      if (name.trim() !== "") {
        const response = await dispatch(
          addItemThunk({
            id: id,
            name: name,
            user: userId,
            cryptos: cryptos,
          })
        );
        console.log(response);
        setListName({ id: -1, name: "" });
      }
    } else {
      if (name.trim() !== "") {
        const response = dispatch(
          updateItemThunk({
            id: id,
            name: name,
            user: userId,
            cryptos: cryptos,
          })
        );
        console.log(response);
        setListName({ id: -1, name: "" });
      }
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
      {showModal && modalType === "form" ? (
        <form onSubmit={handleAddItem} className={styles.modalForm}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={listName.name}
            onChange={(e) =>
              setListName((prevData) => ({ ...prevData, name: e.target.value }))
            }
          />
          <button type="submit">{isEditing ? "Edit List" : "Add List"}</button>
        </form>
      ) : (
        <div>Hello</div>
      )}
    </>
  );
};
