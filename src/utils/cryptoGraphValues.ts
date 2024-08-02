import {
  Crypto,
  CryptoData1,
  CryptoData2,
  CryptoData3,
  CryptoData4,
  CryptoData5,
  CryptoData6,
  CryptoData7,
  CryptoData8,
  CryptoData9,
  CryptoData10,
} from "../assets/CryptoDataSets";
import { getFormatDate, subtractMinutes } from "./utils";

const allCryptoData: Crypto[][] = [
  CryptoData1,
  CryptoData2,
  CryptoData3,
  CryptoData4,
  CryptoData5,
  CryptoData6,
  CryptoData7,
  CryptoData8,
  CryptoData9,
  CryptoData10,
];
export const getCryptoValues = (cryptoId: number) => {
  const cryptoDB: string[][][] = [[]];
  const date = new Date();

  allCryptoData.forEach((cryptoData, i) => {
    // console.log(`Processing CryptoData${i + 1}`);
    const updatedDate = subtractMinutes(date, (i + 1) * 10);
    cryptoData.forEach((crypto, index) => {
      cryptoDB[index + 1] === undefined && cryptoDB.push([]);
      cryptoDB[index + 1].push([crypto.price, getFormatDate(updatedDate)]);
    });
  });
  const yAxisData: number[] = [];
  const xAxisData: Date[] = [];
  cryptoDB[cryptoId].map((crypto) => {
    yAxisData.push(parseFloat(crypto[0]));

    xAxisData.push(new Date(getFormatDate(new Date(crypto[1]))));
  });
  yAxisData.sort(() => Math.random() - 0.5);
  // xAxisData.sort(() => Math.random() - 0.5);

  // yAxisData = generateSimilarValues(yAxisData, 50);

  return { xAxisData, yAxisData };
  // console.log(cryptoDB[cryptoId]);
};
