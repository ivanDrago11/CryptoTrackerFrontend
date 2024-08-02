import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { LineChart } from "@mui/x-charts/LineChart";
import styles from "./CryptoGraph.module.scss";
import theme from "../../assets/themes/theme";
import { getCryptoValues } from "../../utils/cryptoGraphValues";
import { Crypto } from "../../assets/CryptoDataSets";
import React, { useEffect, useState } from "react";

interface ICryptoGraph {
  crypto: Crypto;
}

export const CryptoGraph: React.FC<ICryptoGraph> = ({ crypto }) => {
  const { xAxisData, yAxisData } = getCryptoValues(crypto.id);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getResponsiveSize = () => {
    const width = windowDimensions.width;
    switch (true) {
      case width < 530:
        return { width: 300, height: 150 };
      case width < 580:
        return { width: 450, height: 300 };
      case width < 740:
        return { width: 550, height: 350 };
      case width < 850:
        return { width: 700, height: 450 };
      case width < 1140:
        return { width: 800, height: 450 };
      case width < 1280:
        return { width: 975, height: 450 };
      default:
        return { width: 1090, height: 450 };
    }
  };

  const { width, height } = getResponsiveSize();

  return (
    <div className={styles.cryptoGraph}>
      <ThemeProvider theme={theme}>
        <LineChart
          sx={{
            backgroundColor: "#121111",
            borderRadius: "10px",
            "& .MuiChartsAxis-left .MuiChartsAxis-line": {
              stroke: "white",
              strokeWidth: 4,
            },
            "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
              stroke: "white",
              strokeWidth: 4,
            },
            "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
              fill: "White",
            },
            "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
              fill: "White",
            },
          }}
          xAxis={[
            {
              scaleType: "time",
              data: xAxisData,
            },
          ]}
          // yAxis={[
          //   {
          //     colorMap: {
          //       type: "piecewise",
          //       thresholds: [0, 10],
          //       colors: ["white", "white"],
          //     },
          //   },
          // ]}
          series={[
            {
              curve: "linear",
              data: yAxisData,
              // data: [1, 2, 3, 4],
            },
          ]}
          // width={1090}
          // height={450}
          // width={975}
          // height={450}
          // width={800}
          // height={450}
          // width={700}
          // height={450}
          // width={550}
          // height={350}

          width={width}
          height={height}
        />
      </ThemeProvider>
    </div>
  );
};

export default CryptoGraph;
