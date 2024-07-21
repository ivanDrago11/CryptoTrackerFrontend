import "../../assets/css/variables.scss";

import theme from "../../assets/themes/theme";
import { ThemeProvider } from "@mui/material/styles";
import AddBoxIcon from "@mui/icons-material/AddBox";
import styles from "./CryptoTable.module.scss";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  // Checkbox,
} from "@mui/material/";

import { Crypto } from "../../assets/CryptoDataSets"; // Import the data
import { getFormatDate, roundNumber } from "../../utils/utils";
import { useState } from "react";

interface CryptoTableProps {
  cryptos: Crypto[];
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CryptoTable: React.FC<CryptoTableProps> = ({ cryptos, setShowModal }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.checked) {
  //     const newSelecteds = cryptos.map((n) => n.name);
  //     setSelected(newSelecteds);
  //     return;
  //   }
  //   setSelected([]);
  // };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  return (
    <div className={styles.cryptoTable}>
      <ThemeProvider theme={theme}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  {/* <Checkbox
                  indeterminate={
                    selected.length > 0 && selected.length < cryptos.length
                  }
                  checked={
                    cryptos.length > 0 && selected.length === cryptos.length
                  }
                  onChange={handleSelectAllClick}
                  inputProps={{ "aria-label": "select all cryptos" }}
                /> */}
                </TableCell>
                <TableCell>Crypto</TableCell>
                <TableCell align="right">Symbol</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Market Capitalization</TableCell>
                <TableCell align="right">Volume 24h</TableCell>
                <TableCell align="right">Last Updated</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cryptos.slice(0, 8).map((crypto) => {
                const isItemSelected = isSelected(crypto.name);
                const labelId = `enhanced-table-checkbox-${crypto.name}`;

                return (
                  <TableRow
                    key={crypto.name}
                    hover={true}
                    onClick={(event) => handleClick(event, crypto.name)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    // selected={isItemSelected}
                    sx={{}}
                    className={styles.tableRow}
                  >
                    <TableCell padding="checkbox">
                      {/* <Checkbox
                      checked={isItemSelected}
                      inputProps={{ "aria-labelledby": labelId }}
                    /> */}
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row">
                      {crypto.name}
                    </TableCell>
                    <TableCell align="right">{crypto.symbol}</TableCell>
                    <TableCell align="right">
                      ${roundNumber(crypto.price)}
                    </TableCell>
                    <TableCell align="right">${crypto.market_cap}</TableCell>
                    <TableCell align="right">${crypto.volume_24h}</TableCell>
                    <TableCell align="right">{getFormatDate()}</TableCell>
                    <TableCell align="right">
                      <div onClick={() => setShowModal(true)}>
                        <AddBoxIcon className={styles.icon} />
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
    </div>
  );
};

export default CryptoTable;
