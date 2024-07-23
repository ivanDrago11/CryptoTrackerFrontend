// src/routes.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Header from "./components/Layout/Header";
// import Sidebar from "./components/Layout/Sidebar";
// import Footer from "./components/Layout/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
// import Headers from "./components/Headers/Headers";
import CurrencieDetails from "./pages/CurrencieDetails/CurrencieDetails";
import WalletView from "./pages/WalletView/WalletView";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainHeader from "./components/Headers/MainHeader/MainHeader";

const AppRoutes = () => {
  return (
    <Router>
      <MainHeader />
      {/* <Sidebar /> */}
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/walletView" element={<WalletView />} />
          <Route path="/currencieDetails" element={<CurrencieDetails />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
