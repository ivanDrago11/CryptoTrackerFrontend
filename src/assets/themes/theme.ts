import { createTheme } from "@mui/material/styles";
import "../css/variables.scss";
const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "black",
        },
        head: {
          color: "#e9ecef", // Font color for table header cells
          backgroundColor: "#121111", // Background color for table header cells
          fontFamily: "Poppins",
        },
        body: {
          color: "#e9ecef",
          // backgroundColor: "#121111",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: "black",
          color: "white",
          "&:hover": {
            backgroundColor: "#f8f9fa !important",
            cursor: "pointer",
            "& .MuiTableCell-root": {
              color: "black", // Custom color for the cell text on hover
            },
            "& .MuiTableCell-head": {
              color: "inherit", // Keep header cell color unchanged
            },
          },
          "&.Mui-selected": {
            backgroundColor: "#ced4da !important", // Custom color for selected rows
            "& .MuiTableCell-root": {
              color: "black", // Custom color for the cell text when row is selected
            },
          },
        },
      },
    },
  },
});

export default theme;
