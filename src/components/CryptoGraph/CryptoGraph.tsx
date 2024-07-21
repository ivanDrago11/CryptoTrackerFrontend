import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { LineChart } from "@mui/x-charts/LineChart";
import theme from "../../assets/themes/theme";

export default function BasicLineChart() {
  return (
    <ThemeProvider theme={theme}>
      <LineChart
        sx={{
          backgroundColor: "black",
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
            data: [1, 2, 3, 5, 8, 10],
            label: "Number",
            labelStyle: { color: "red" },
          },
        ]}
        yAxis={[
          {
            colorMap: {
              type: "piecewise",
              thresholds: [0, 10],
              colors: ["white", "white"],
            },
          },
        ]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={1200}
        height={450}
      />
    </ThemeProvider>
  );
}
