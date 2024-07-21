import styles from "./LandingPage.module.scss";

// IMPORT IMAGES
import DataThresholdingIcon from "@mui/icons-material/DataThresholding";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setPage } from "../../store/headerSlice";

const LandingPage: React.FC = () => {
  const dispatch = useDispatch();
  dispatch(setPage("/"));
  return (
    <div>
      {/* HOME SECTION */}
      <section className={styles.home}>
        <h2>Welcome to Crypto Sphere</h2>
        <p>
          Your all-in-one cryptocurrency dashboard to track, analyze, and trade
          digital currencies seamlessly and efficiently.
        </p>
        <Link to="/loginPage" className={styles["home__button"]}>
          Get Started
        </Link>
      </section>

      {/* FEATURES SECTION */}
      <section className={styles.features}>
        <h2>Features</h2>
        <div className={styles.features__list}>
          <div className={styles["features__list__item"]}>
            <DataThresholdingIcon sx={{ fontSize: "10rem" }} />
            <h4>Comprehensive Dashboard</h4>
            <p>Track your crypto assets with real-time data and insights.</p>
          </div>
          <div className={styles["features__list__item"]}>
            <LeaderboardIcon sx={{ fontSize: "10rem" }} />
            <h4>Seamless Trading</h4>
            <p>Trade cryptocurrencies directly from the dashboard.</p>
          </div>
          <div className={styles["features__list__item"]}>
            <QueryStatsIcon sx={{ fontSize: "10rem" }} />
            <h4>Advanced Analytics</h4>
            <p>Analyze market trends with our powerful analytics tools.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
