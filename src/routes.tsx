import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import WalletView from "./pages/WalletView/WalletView";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainHeader from "./components/Headers/MainHeader/MainHeader";
import CurrencyDetails from "./pages/CurrencyDetails/CurrencyDetails";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import UnProtectedRoute from "./components/ProtectedRoute/UnProtectedRoute";

const AppRoutes = () => {
  return (
    <Router>
      <MainHeader />
      {/* <Sidebar /> */}
      <main>
        <Routes>
          <Route element={<UnProtectedRoute />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/loginPage" element={<LoginPage />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/walletView" element={<WalletView />} />
            <Route path="/currencyDetails" element={<CurrencyDetails />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
