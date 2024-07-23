import "../../assets/css/variables.scss";

import theme from "../../assets/themes/theme";
import { ThemeProvider } from "@mui/material/styles";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
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
import { Wallet } from "../../store/cryptoWalletSlice";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

interface CryptoTableProps {
  walletId?: number;
  cryptos: Crypto[];
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCrypto: React.Dispatch<React.SetStateAction<Crypto | null>>;
  setSelectedWallet?: React.Dispatch<React.SetStateAction<Wallet | null>>;
}

const CryptoTable: React.FC<CryptoTableProps> = ({
  walletId,
  cryptos,
  setShowModal,
  setModalType,
  setSelectedCrypto,
  setSelectedWallet,
}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const wallets = useSelector((state: RootState) => state.wallets.wallets);
  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.checked) {
  //     const newSelecteds = cryptos.map((n) => n.name);
  //     setSelected(newSelecteds);
  //     return;
  //   }
  //   setSelected([]);
  // };

  const getWallet = (walletId: number): Wallet => {
    const wallet = wallets.filter((wallet) => wallet.id === walletId);
    return wallet[0];
  };

  const getCryptos = (walletId: number | undefined, cryptos: Crypto[]) => {
    if (walletId) {
      const wallet = getWallet(walletId);

      const filteredCryptos = cryptos.filter((crypto) =>
        wallet?.cryptos.includes(crypto.id)
      );
      return filteredCryptos;
    } else {
      return cryptos;
    }
  };

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
                <TableCell padding="checkbox"></TableCell>
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
              {getCryptos(walletId, cryptos)
                .slice(0, 8)
                .map((crypto) => {
                  const isItemSelected = isSelected(crypto.name);
                  const labelId = `enhanced-table-checkbox-${crypto.name}`;

                  return (
                    <TableRow
                      key={crypto.id}
                      hover={true}
                      onClick={(event) => handleClick(event, crypto.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      // selected={isItemSelected}
                      sx={{}}
                      className={styles.tableRow}
                    >
                      <TableCell padding="checkbox"></TableCell>
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
                        {walletId ? (
                          <div
                            onClick={() => {
                              setShowModal(true);
                              setModalType("deleteCryptoFromWallet");
                              setSelectedCrypto(crypto);
                              console.log(getCryptos(walletId, cryptos));
                              setSelectedWallet!(getWallet(walletId));
                            }}
                          >
                            <DeleteForeverIcon
                              className={styles["icon-delete"]}
                            />
                          </div>
                        ) : (
                          <div
                            onClick={() => {
                              setShowModal(true);
                              setModalType("addCryptoToWallet");
                              setSelectedCrypto(crypto);
                            }}
                          >
                            <AddBoxIcon className={styles["icon-add"]} />
                          </div>
                        )}
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
