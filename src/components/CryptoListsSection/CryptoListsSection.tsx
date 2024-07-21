import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { deleteItemThunk } from "../../store/cryptoListSlice";
import SettingsIcon from "@mui/icons-material/Settings";
import styles from "./CryptoListsSection.module.scss";

export interface CryptoListsSectionProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setListName: React.Dispatch<
    React.SetStateAction<{
      id: number;
      name: string;
    }>
  >;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  modalType: string;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
}
// CryptoList Component
const CryptoListsSection: React.FC<CryptoListsSectionProps> = ({
  setListName,
  setShowModal,
  setIsEditing,
  setModalType,
}) => {
  // Redux state and dispatch
  const items = useSelector((state: RootState) => state.items.items);
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();

  // Refs and state
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  // const [showModal, setShowModal] = useState(false);

  // states

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

  // Handle adding a new item

  // Handle deleting an item (currently a placeholder)
  const handleDeleteItem = (id: number) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      dispatch(deleteItemThunk({ id }));
    }
  };

  return (
    <>
      <section className={styles["manageList"]}>
        <h3 className={styles["manageList-title"]}>Your Lists</h3>
        <button
          className={styles["manageList-button"]}
          onClick={() => {
            setListName({ id: -1, name: "" });
            setIsEditing(false);
            setShowModal(true);
            setModalType("form");
          }}
        >
          Add New List
        </button>

        {/* List of crypto items */}
        <div className={styles["manageList__list"]}>
          {items.map((item) => (
            <div
              key={item.id}
              className={`${styles["manageList__list__item"]} ${
                activeListItem === item.name ? styles.selectedItem : ""
              }`}
            >
              <a>{item.name}</a>
              <SettingsIcon
                className={styles.icon}
                onClick={() => toggleDropdown(item.name)}
              />
              {dropdownVisible === item.name && (
                <div
                  className={`${styles["manageList__list__item-options"]} ${
                    dropdownVisible === item.name
                      ? styles["manageList__list__item-options--show"]
                      : ""
                  }`}
                  ref={dropdownRef}
                >
                  <button
                    onClick={() => {
                      setListName({ id: item.id, name: item.name });
                      setIsEditing(true);
                      setDropdownVisible(null);
                      setActiveListItem(null);
                      setModalType("form");
                      setShowModal(true);
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDeleteItem(item.id)}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* <ModalForm
          showModal={showModal}
          styles={styles}
          handleModal={handleModal}
          handleAddItem={handleAddItem}
          isEditing={isEditing}
          setItem={setItem}
          item={item} 
          modalType={modalType}        /> */}
      </section>
    </>
  );
};

export default CryptoListsSection;
