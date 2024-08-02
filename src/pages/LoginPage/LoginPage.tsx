import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  fetchUserIdThunk,
  loginUserThunk,
  registerUserThunk,
} from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import styles from "./LoginPage.module.scss";
import { RootState } from "../../store";
import { setPage } from "../../store/headerSlice";
import { CustomModal } from "../../components/CustomModal/CustomModal";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
  dispatch(setPage("/loginPage"));
  const location = useLocation();
  let { value } = location.state || {};
  value = value ?? true;
  const [isLogin, setLogin] = useState<boolean>(value);
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  interface User {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

  const [userInfo, setUserInfo] = useState<User>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState<boolean>(false);
  const modalType = "confirmationMessage";
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password, email, confirmPassword } = userInfo;
    if (isLogin) {
      const response = await dispatch(loginUserThunk({ username, password }));
      const log = await dispatch(fetchUserIdThunk({ username }));
      if (response.type === "auth/loginUser/fulfilled") {
        navigate("/dashboard");
        setUserInfo({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setError(false);
        console.log(log);
      } else {
        setError(true);
      }
    } else {
      if (password === confirmPassword) {
        const response = await dispatch(
          registerUserThunk({ username, email, password })
        );
        if (response.type === "auth/registerUser/fulfilled") {
          setModalMessage("The user was created succesfully");
          setShowModal(true);
          setPasswordError(false);
          setIsPasswordVisible(false);
          setUserInfo({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        } else {
          setModalMessage("The user already exists");
          setShowModal(true);
        }
      } else {
        setPasswordError(true);
      }
    }
  };

  const toggleButton = () => {
    setLogin(!isLogin);
  };

  return (
    <>
      <form className={styles.main} onSubmit={handleSubmit}>
        <div className={styles["main__form"]}>
          {/* LOGIN SECTION */}
          <div className={styles["main__form-box"]}>
            {isLogin ? <h2>Login</h2> : <h2>Register</h2>}
            <label htmlFor="">
              {isLogin ? "Username or Email" : "Username"}
            </label>
            <input
              type="text"
              value={userInfo.username}
              onChange={(e) =>
                setUserInfo({ ...userInfo, username: e.target.value })
              }
              placeholder={
                isLogin ? "Enter your username or email" : "username"
              }
              autoComplete="username"
              minLength={4}
              maxLength={10}
              required
            />
            {isLogin ? (
              ""
            ) : (
              <>
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  value={userInfo.email}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                  placeholder="email@mail.com"
                  autoComplete="email"
                  required
                />
              </>
            )}
            <label htmlFor="">Password</label>
            <div className={styles["main__form-box__passwordField"]}>
              <input
                type={isPasswordVisible ? "text" : "password"}
                value={userInfo.password}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, password: e.target.value })
                }
                placeholder="Enter your Password"
                autoComplete="current-password"
                minLength={8}
                maxLength={30}
                required
              />
              {isPasswordVisible ? (
                <VisibilityOffIcon
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  className={styles.icon}
                />
              ) : (
                <VisibilityIcon
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  className={styles.icon}
                />
              )}
            </div>

            {isLogin ? (
              ""
            ) : (
              <>
                {/* Delete browser warning */}
                <input autoComplete="username" style={{ display: "none" }} />
                {/* ///// */}

                <label htmlFor="">Confirm Password</label>
                <div className={styles["main__form-box__passwordField"]}>
                  <input
                    type={isConfirmPasswordVisible ? "text" : "password"}
                    value={userInfo.confirmPassword}
                    onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        confirmPassword: e.target.value,
                      })
                    }
                    placeholder="Confirm Password"
                    autoComplete="new-password"
                    minLength={8}
                    maxLength={30}
                    required
                  />
                  {isConfirmPasswordVisible ? (
                    <VisibilityOffIcon
                      onClick={() =>
                        setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                      }
                      className={styles.icon}
                    />
                  ) : (
                    <VisibilityIcon
                      onClick={() =>
                        setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                      }
                      className={styles.icon}
                    />
                  )}
                </div>
              </>
            )}

            {/* ERROR LABELS */}
            {isLogin ? (
              <label
                className={`${styles["main__form-errorLabel"]} ${
                  error && isLogin && styles["main__form-errorLabel--true"]
                }`}
              >
                Wrong Email or Password
              </label>
            ) : (
              <label
                className={`${styles["main__form-errorLabel"]} ${
                  passwordError &&
                  isLogin == false &&
                  styles["main__form-errorLabel--true"]
                }`}
              >
                Passwords don't match
              </label>
            )}
            <button type="submit">{isLogin ? "Login" : "Register"}</button>
            {isLogin ? (
              <p>
                Don't have an account? <a onClick={toggleButton}>Sign up</a>
              </p>
            ) : (
              <p>
                Do you have an account? <a onClick={toggleButton}>Sign in</a>
              </p>
            )}
          </div>
        </div>
      </form>
      <CustomModal
        message={modalMessage}
        showModal={showModal}
        setShowModal={setShowModal}
        modalType={modalType}
      />
    </>
  );
};

export default LoginPage;
