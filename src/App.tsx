import "./App.css";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";

const App: React.FC = () => {
  return (
    <div className="app">
      <LandingPage />
      <Footer />
    </div>
  );
};

export default App;
