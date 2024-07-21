import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUserThunk, registerUserThunk } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import styles from "./LoginPage.module.scss";
import { RootState } from "../../store";

const LoginPage: React.FC = () => {
  const location = useLocation();
  const { value } = location.state || {};
  const [isLogin, setLogin] = useState(value);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
  const navigate = useNavigate();

  // const { loginUser, registerUser } = authContext;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLogin) {
      const response = await dispatch(loginUserThunk({ username, password }));
      if (response.type === "auth/loginUser/fulfilled") {
        console.log("ok");
        navigate("/dashboard");
        setError(false);
        console.log(typeof response.type);
      } else {
        setError(true);
      }
    } else {
      if (password === confirmPassword) {
        const response = await dispatch(
          registerUserThunk({ username, email, password })
        );
        if (response.type === "auth/registerUser/fulfilled") {
          console.log(response);
          setPasswordError(false);
          alert("User registered successfully");
        } else {
          alert("Incorrect User");
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@mail.com"
                  autoComplete="email"
                  required
                />
              </>
            )}
            <label htmlFor="">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              autoComplete="current-password"
              minLength={8}
              maxLength={30}
              required
            />

            {isLogin ? (
              ""
            ) : (
              <>
                {/* Delete browser warning */}
                <input autoComplete="username" style={{ display: "none" }} />
                {/* ///// */}

                <label htmlFor="">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  autoComplete="new-password"
                  minLength={8}
                  maxLength={30}
                  required
                />
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
    </>
  );
};

export default LoginPage;
