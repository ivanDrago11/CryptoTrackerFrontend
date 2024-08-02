import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPage } from "../../store/headerSlice";
import { logoutUser, selectUsername } from "../../store/authSlice";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useEffect, useRef, useState } from "react";

interface HeaderItemsProps {
  page: string;
  styles: CSSModuleClasses;
}

const HeaderItems: React.FC<HeaderItemsProps> = ({ page, styles }) => {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);

  // Handle clicks outside the dropdown to close it
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
  };

  // Add event listener for clicks outside the dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavigation = (page: string, value: boolean) => {
    navigate(page, { state: { value: value } });
    dispatch(setPage(page));
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    // setActiveListItem(activeListItem === id ? null : id);
  };

  const logout = async () => {
    await dispatch(logoutUser());
    navigate("/");
  };

  switch (page) {
    case "/":
      return (
        <>
          <a
            onClick={() => handleNavigation("/loginPage", true)}
            className={styles["header__navBar-buttonSign"]}
          >
            Sign in
          </a>
          <a
            onClick={() => handleNavigation("/loginPage", false)}
            className={styles["header__navBar-buttonSign"]}
          >
            Sign up
          </a>
        </>
      );
    case "/loginPage":
      return <></>;

    case "/dashboard":
    case "/walletView":
    case "/currencyDetails":
      return (
        <>
          <div
            className={styles["header__navBar-userName"]}
            onClick={toggleDropdown}
          >
            <AccountBoxIcon /> {username}
            <KeyboardArrowRightIcon
              className={`${styles.arrowIcon} ${
                dropdownVisible && styles.rotated
              }`}
            />
            {dropdownVisible && (
              <div
                className={`${styles["header__navBar-userName-options"]} ${
                  dropdownVisible
                    ? styles["header__navBar-userName-options--show"]
                    : ""
                }`}
                ref={dropdownRef}
              >
                <button onClick={logout}>Logout</button>
                <button>Account</button>
              </div>
            )}
          </div>
        </>
      );
    default:
      return <div></div>;
  }
};

export default HeaderItems;
