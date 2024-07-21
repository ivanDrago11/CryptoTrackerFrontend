import { useDispatch } from "react-redux";
import "./App.css";
// import Footer from "./components/Footer/Footer";
// import LandingPage from "./pages/LandingPage/LandingPage";
import AppRoutes from "./routes";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { fetchItemsThunk } from "./store/cryptoListSlice";
import { useEffect } from "react";
import { fetchCryptosThunk } from "./store/dashboardSlice";

const App: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();

  useEffect(() => {
    const fetchCryptoLists = async () => {
      const response = await dispatch(fetchItemsThunk());
      console.log(response);
    };
    fetchCryptoLists();

    const fetchCryptos = async () => {
      const response = await dispatch(fetchCryptosThunk());
      console.log(response);
    };
    fetchCryptos();
  });

  return <AppRoutes />;
};

export default App;
