import "./App.css";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

const App: React.FC = () => {
  return (
    <div className="app">
      <LandingPage />
      <Footer />
    </div>
  );
};

export default App;
