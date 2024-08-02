import { useDispatch } from "react-redux";
import "./App.css";
// import Footer from "./components/Footer/Footer";
// import LandingPage from "./pages/LandingPage/LandingPage";
import AppRoutes from "./routes";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { fetchWalletsThunk } from "./store/cryptoWalletSlice";
import { useEffect } from "react";
import { fetchCryptosThunk } from "./store/dashboardSlice";

const App: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();

  useEffect(() => {
    const fetchCryptoLists = async () => {
      await dispatch(fetchWalletsThunk());
    };
    fetchCryptoLists();

    const fetchCryptos = async () => {
      await dispatch(fetchCryptosThunk());
    };
    fetchCryptos();
  });

  return <AppRoutes />;
};

export default App;
