import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPage } from "../../store/headerSlice";

interface HeaderItemsProps {
  page: string;
  styles: CSSModuleClasses;
}

const HeaderItems: React.FC<HeaderItemsProps> = ({ page, styles }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigation = (page: string, value: boolean) => {
    navigate(page, { state: { value: value } });
    dispatch(setPage(page));
  };

  switch (page) {
    case "/":
      dispatch(setPage(page));
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
      dispatch(setPage("loginPage"));
      return <></>;
    case "/dashboard":
      // dispatch(setPage("dashboard"));
      return (
        <a
          onClick={() => handleNavigation("/loginPage", false)}
          className={styles["header__navBar-buttonLogout"]}
        >
          Logout
        </a>
      );
    default:
      return <div></div>;
  }
};

export default HeaderItems;
