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
import { Wallet } from "../../store/cryptoWalletSlice";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPage } from "../../store/headerSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

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
  const wallets = useSelector((state: RootState) => state.wallets.wallets);
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
  const navigate = useNavigate();

  const handleNavigation = (page: string, crypto: Crypto) => {
    navigate(page, { state: { crypto: crypto } });
    dispatch(setPage(page));
  };

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
                  const labelId = `enhanced-table-checkbox-${crypto.name}`;

                  return (
                    <TableRow
                      key={crypto.id}
                      hover={true}
                      onClick={() =>
                        handleNavigation("/currencyDetails", crypto)
                      }
                      role="checkbox"
                      // aria-checked={isItemSelected}
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
                            onClick={(event) => {
                              event.stopPropagation();
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
                            onClick={(event) => {
                              event.stopPropagation();
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
