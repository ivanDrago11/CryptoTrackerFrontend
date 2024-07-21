export interface Crypto {
  id: string;
  last_updated: string;
  name: string;
  market_cap: string;
  volume_24h: string;
  price: string;
  symbol: string;
}

const CryptoData1: Crypto[] = [
  {
    id: "bitcoin",
    last_updated: new Date().toISOString(),
    name: "Bitcoin",
    market_cap: "544643546354.45",
    volume_24h: "400454523.17",
    price: "30014.56",
    symbol: "BTC",
  },
  {
    id: "ethereum",
    last_updated: new Date().toISOString(),
    name: "Ethereum",
    market_cap: "251743621977.67",
    volume_24h: "214326788.12",
    price: "2041.23",
    symbol: "ETH",
  },
  {
    id: "litecoin",
    last_updated: new Date().toISOString(),
    name: "Litecoin",
    market_cap: "9374625374.12",
    volume_24h: "32143622.90",
    price: "148.79",
    symbol: "LTC",
  },
  {
    id: "ripple",
    last_updated: new Date().toISOString(),
    name: "Ripple",
    market_cap: "48374652819.55",
    volume_24h: "17356342.12",
    price: "1.22",
    symbol: "XRP",
  },
  {
    id: "bitcoin-cash",
    last_updated: new Date().toISOString(),
    name: "Bitcoin Cash",
    market_cap: "8374652938.75",
    volume_24h: "15234421.45",
    price: "392.18",
    symbol: "BCH",
  },
  {
    id: "cardano",
    last_updated: new Date().toISOString(),
    name: "Cardano",
    market_cap: "52374621893.25",
    volume_24h: "21734621.37",
    price: "1.47",
    symbol: "ADA",
  },
  {
    id: "polkadot",
    last_updated: new Date().toISOString(),
    name: "Polkadot",
    market_cap: "14736219376.45",
    volume_24h: "10324621.14",
    price: "23.76",
    symbol: "DOT",
  },
  {
    id: "stellar",
    last_updated: new Date().toISOString(),
    name: "Stellar",
    market_cap: "6237462184.23",
    volume_24h: "5234261.73",
    price: "0.38",
    symbol: "XLM",
  },
  {
    id: "chainlink",
    last_updated: new Date().toISOString(),
    name: "Chainlink",
    market_cap: "10237462187.23",
    volume_24h: "8436217.35",
    price: "19.84",
    symbol: "LINK",
  },
  {
    id: "dogecoin",
    last_updated: new Date().toISOString(),
    name: "Dogecoin",
    market_cap: "29746321873.12",
    volume_24h: "29543621.54",
    price: "0.24",
    symbol: "DOGE",
  },
  {
    id: "uniswap",
    last_updated: new Date().toISOString(),
    name: "Uniswap",
    market_cap: "7234621973.43",
    volume_24h: "5214361.98",
    price: "19.63",
    symbol: "UNI",
  },
  {
    id: "aave",
    last_updated: new Date().toISOString(),
    name: "Aave",
    market_cap: "6387462913.84",
    volume_24h: "4123618.73",
    price: "391.12",
    symbol: "AAVE",
  },
  {
    id: "solana",
    last_updated: new Date().toISOString(),
    name: "Solana",
    market_cap: "8397462187.45",
    volume_24h: "6218437.29",
    price: "34.87",
    symbol: "SOL",
  },
  {
    id: "vechain",
    last_updated: new Date().toISOString(),
    name: "VeChain",
    market_cap: "7143621983.23",
    volume_24h: "3128461.57",
    price: "0.11",
    symbol: "VET",
  },
  {
    id: "terra",
    last_updated: new Date().toISOString(),
    name: "Terra",
    market_cap: "9137462918.56",
    volume_24h: "7234618.73",
    price: "51.12",
    symbol: "LUNA",
  },
];

const CryptoData2: Crypto[] = [
  {
    id: "bitcoin",
    last_updated: new Date().toISOString(),
    name: "Bitcoin",
    market_cap: "523846293546.45",
    volume_24h: "380452523.17",
    price: "29800.34",
    symbol: "BTC",
  },
  {
    id: "ethereum",
    last_updated: new Date().toISOString(),
    name: "Ethereum",
    market_cap: "247543621977.67",
    volume_24h: "210326788.12",
    price: "2023.56",
    symbol: "ETH",
  },
  {
    id: "litecoin",
    last_updated: new Date().toISOString(),
    name: "Litecoin",
    market_cap: "9174625374.12",
    volume_24h: "31143622.90",
    price: "142.79",
    symbol: "LTC",
  },
  {
    id: "ripple",
    last_updated: new Date().toISOString(),
    name: "Ripple",
    market_cap: "47374652819.55",
    volume_24h: "16356342.12",
    price: "1.18",
    symbol: "XRP",
  },
  {
    id: "bitcoin-cash",
    last_updated: new Date().toISOString(),
    name: "Bitcoin Cash",
    market_cap: "8174652938.75",
    volume_24h: "14234421.45",
    price: "382.18",
    symbol: "BCH",
  },
  {
    id: "cardano",
    last_updated: new Date().toISOString(),
    name: "Cardano",
    market_cap: "51374621893.25",
    volume_24h: "20734621.37",
    price: "1.37",
    symbol: "ADA",
  },
  {
    id: "polkadot",
    last_updated: new Date().toISOString(),
    name: "Polkadot",
    market_cap: "14336219376.45",
    volume_24h: "10024621.14",
    price: "22.76",
    symbol: "DOT",
  },
  {
    id: "stellar",
    last_updated: new Date().toISOString(),
    name: "Stellar",
    market_cap: "6137462184.23",
    volume_24h: "5134261.73",
    price: "0.36",
    symbol: "XLM",
  },
  {
    id: "chainlink",
    last_updated: new Date().toISOString(),
    name: "Chainlink",
    market_cap: "99237462187.23",
    volume_24h: "8136217.35",
    price: "18.84",
    symbol: "LINK",
  },
  {
    id: "dogecoin",
    last_updated: new Date().toISOString(),
    name: "Dogecoin",
    market_cap: "28746321873.12",
    volume_24h: "28543621.54",
    price: "0.23",
    symbol: "DOGE",
  },
  {
    id: "uniswap",
    last_updated: new Date().toISOString(),
    name: "Uniswap",
    market_cap: "7034621973.43",
    volume_24h: "5014361.98",
    price: "18.63",
    symbol: "UNI",
  },
  {
    id: "aave",
    last_updated: new Date().toISOString(),
    name: "Aave",
    market_cap: "6187462913.84",
    volume_24h: "4023618.73",
    price: "381.12",
    symbol: "AAVE",
  },
  {
    id: "solana",
    last_updated: new Date().toISOString(),
    name: "Solana",
    market_cap: "8197462187.45",
    volume_24h: "6118437.29",
    price: "33.87",
    symbol: "SOL",
  },
  {
    id: "vechain",
    last_updated: new Date().toISOString(),
    name: "VeChain",
    market_cap: "7043621983.23",
    volume_24h: "3028461.57",
    price: "0.10",
    symbol: "VET",
  },
  {
    id: "terra",
    last_updated: new Date().toISOString(),
    name: "Terra",
    market_cap: "8937462918.56",
    volume_24h: "7134618.73",
    price: "50.12",
    symbol: "LUNA",
  },
];

const CryptoData3: Crypto[] = [
  {
    id: "bitcoin",
    last_updated: new Date().toISOString(),
    name: "Bitcoin",
    market_cap: "547123546354.45",
    volume_24h: "410454523.17",
    price: "30210.78",
    symbol: "BTC",
  },
  {
    id: "ethereum",
    last_updated: new Date().toISOString(),
    name: "Ethereum",
    market_cap: "259743621977.67",
    volume_24h: "224326788.12",
    price: "2070.15",
    symbol: "ETH",
  },
  {
    id: "litecoin",
    last_updated: new Date().toISOString(),
    name: "Litecoin",
    market_cap: "9474625374.12",
    volume_24h: "33143622.90",
    price: "153.79",
    symbol: "LTC",
  },
  {
    id: "ripple",
    last_updated: new Date().toISOString(),
    name: "Ripple",
    market_cap: "49374652819.55",
    volume_24h: "18356342.12",
    price: "1.25",
    symbol: "XRP",
  },
  {
    id: "bitcoin-cash",
    last_updated: new Date().toISOString(),
    name: "Bitcoin Cash",
    market_cap: "8474652938.75",
    volume_24h: "16234421.45",
    price: "398.18",
    symbol: "BCH",
  },
  {
    id: "cardano",
    last_updated: new Date().toISOString(),
    name: "Cardano",
    market_cap: "53374621893.25",
    volume_24h: "22734621.37",
    price: "1.52",
    symbol: "ADA",
  },
  {
    id: "polkadot",
    last_updated: new Date().toISOString(),
    name: "Polkadot",
    market_cap: "15336219376.45",
    volume_24h: "11324621.14",
    price: "24.76",
    symbol: "DOT",
  },
  {
    id: "stellar",
    last_updated: new Date().toISOString(),
    name: "Stellar",
    market_cap: "6337462184.23",
    volume_24h: "5434261.73",
    price: "0.40",
    symbol: "XLM",
  },
  {
    id: "chainlink",
    last_updated: new Date().toISOString(),
    name: "Chainlink",
    market_cap: "10337462187.23",
    volume_24h: "8536217.35",
    price: "20.84",
    symbol: "LINK",
  },
  {
    id: "dogecoin",
    last_updated: new Date().toISOString(),
    name: "Dogecoin",
    market_cap: "30746321873.12",
    volume_24h: "30543621.54",
    price: "0.26",
    symbol: "DOGE",
  },
  {
    id: "uniswap",
    last_updated: new Date().toISOString(),
    name: "Uniswap",
    market_cap: "7434621973.43",
    volume_24h: "5414361.98",
    price: "20.63",
    symbol: "UNI",
  },
  {
    id: "aave",
    last_updated: new Date().toISOString(),
    name: "Aave",
    market_cap: "6587462913.84",
    volume_24h: "4423618.73",
    price: "401.12",
    symbol: "AAVE",
  },
  {
    id: "solana",
    last_updated: new Date().toISOString(),
    name: "Solana",
    market_cap: "8497462187.45",
    volume_24h: "6418437.29",
    price: "36.87",
    symbol: "SOL",
  },
  {
    id: "vechain",
    last_updated: new Date().toISOString(),
    name: "VeChain",
    market_cap: "7243621983.23",
    volume_24h: "3228461.57",
    price: "0.12",
    symbol: "VET",
  },
  {
    id: "terra",
    last_updated: new Date().toISOString(),
    name: "Terra",
    market_cap: "9237462918.56",
    volume_24h: "7334618.73",
    price: "52.12",
    symbol: "LUNA",
  },
];

const CryptoData4: Crypto[] = [
  {
    id: "bitcoin",
    last_updated: new Date().toISOString(),
    name: "Bitcoin",
    market_cap: "552746546354.45",
    volume_24h: "404454523.17",
    price: "30514.56",
    symbol: "BTC",
  },
  {
    id: "ethereum",
    last_updated: new Date().toISOString(),
    name: "Ethereum",
    market_cap: "255743621977.67",
    volume_24h: "218326788.12",
    price: "2061.23",
    symbol: "ETH",
  },
  {
    id: "litecoin",
    last_updated: new Date().toISOString(),
    name: "Litecoin",
    market_cap: "9474625374.12",
    volume_24h: "32543622.90",
    price: "150.79",
    symbol: "LTC",
  },
  {
    id: "ripple",
    last_updated: new Date().toISOString(),
    name: "Ripple",
    market_cap: "48774652819.55",
    volume_24h: "17556342.12",
    price: "1.23",
    symbol: "XRP",
  },
  {
    id: "bitcoin-cash",
    last_updated: new Date().toISOString(),
    name: "Bitcoin Cash",
    market_cap: "8404652938.75",
    volume_24h: "15334421.45",
    price: "395.18",
    symbol: "BCH",
  },
  {
    id: "cardano",
    last_updated: new Date().toISOString(),
    name: "Cardano",
    market_cap: "52674621893.25",
    volume_24h: "21834621.37",
    price: "1.48",
    symbol: "ADA",
  },
  {
    id: "polkadot",
    last_updated: new Date().toISOString(),
    name: "Polkadot",
    market_cap: "14936219376.45",
    volume_24h: "10524621.14",
    price: "24.76",
    symbol: "DOT",
  },
  {
    id: "stellar",
    last_updated: new Date().toISOString(),
    name: "Stellar",
    market_cap: "6277462184.23",
    volume_24h: "5254261.73",
    price: "0.39",
    symbol: "XLM",
  },
  {
    id: "chainlink",
    last_updated: new Date().toISOString(),
    name: "Chainlink",
    market_cap: "10387462187.23",
    volume_24h: "8466217.35",
    price: "20.84",
    symbol: "LINK",
  },
  {
    id: "dogecoin",
    last_updated: new Date().toISOString(),
    name: "Dogecoin",
    market_cap: "30246321873.12",
    volume_24h: "29743621.54",
    price: "0.25",
    symbol: "DOGE",
  },
  {
    id: "uniswap",
    last_updated: new Date().toISOString(),
    name: "Uniswap",
    market_cap: "7284621973.43",
    volume_24h: "5234361.98",
    price: "20.63",
    symbol: "UNI",
  },
  {
    id: "aave",
    last_updated: new Date().toISOString(),
    name: "Aave",
    market_cap: "6437462913.84",
    volume_24h: "4143618.73",
    price: "395.12",
    symbol: "AAVE",
  },
  {
    id: "solana",
    last_updated: new Date().toISOString(),
    name: "Solana",
    market_cap: "8467462187.45",
    volume_24h: "6228437.29",
    price: "36.87",
    symbol: "SOL",
  },
  {
    id: "vechain",
    last_updated: new Date().toISOString(),
    name: "VeChain",
    market_cap: "7123621983.23",
    volume_24h: "3148461.57",
    price: "0.11",
    symbol: "VET",
  },
  {
    id: "terra",
    last_updated: new Date().toISOString(),
    name: "Terra",
    market_cap: "9187462918.56",
    volume_24h: "7244618.73",
    price: "51.72",
    symbol: "LUNA",
  },
];

const CryptoData5: Crypto[] = [
  {
    id: "bitcoin",
    last_updated: new Date().toISOString(),
    name: "Bitcoin",
    market_cap: "558743546354.45",
    volume_24h: "420454523.17",
    price: "30814.56",
    symbol: "BTC",
  },
  {
    id: "ethereum",
    last_updated: new Date().toISOString(),
    name: "Ethereum",
    market_cap: "259743621977.67",
    volume_24h: "224326788.12",
    price: "2081.23",
    symbol: "ETH",
  },
  {
    id: "litecoin",
    last_updated: new Date().toISOString(),
    name: "Litecoin",
    market_cap: "9574625374.12",
    volume_24h: "34143622.90",
    price: "152.79",
    symbol: "LTC",
  },
  {
    id: "ripple",
    last_updated: new Date().toISOString(),
    name: "Ripple",
    market_cap: "49774652819.55",
    volume_24h: "18356342.12",
    price: "1.24",
    symbol: "XRP",
  },
  {
    id: "bitcoin-cash",
    last_updated: new Date().toISOString(),
    name: "Bitcoin Cash",
    market_cap: "8574652938.75",
    volume_24h: "16334421.45",
    price: "399.18",
    symbol: "BCH",
  },
  {
    id: "cardano",
    last_updated: new Date().toISOString(),
    name: "Cardano",
    market_cap: "53674621893.25",
    volume_24h: "22734621.37",
    price: "1.58",
    symbol: "ADA",
  },
  {
    id: "polkadot",
    last_updated: new Date().toISOString(),
    name: "Polkadot",
    market_cap: "15336219376.45",
    volume_24h: "12324621.14",
    price: "25.76",
    symbol: "DOT",
  },
  {
    id: "stellar",
    last_updated: new Date().toISOString(),
    name: "Stellar",
    market_cap: "6377462184.23",
    volume_24h: "5534261.73",
    price: "0.41",
    symbol: "XLM",
  },
  {
    id: "chainlink",
    last_updated: new Date().toISOString(),
    name: "Chainlink",
    market_cap: "10737462187.23",
    volume_24h: "8636217.35",
    price: "21.84",
    symbol: "LINK",
  },
  {
    id: "dogecoin",
    last_updated: new Date().toISOString(),
    name: "Dogecoin",
    market_cap: "31746321873.12",
    volume_24h: "31543621.54",
    price: "0.27",
    symbol: "DOGE",
  },
  {
    id: "uniswap",
    last_updated: new Date().toISOString(),
    name: "Uniswap",
    market_cap: "7634621973.43",
    volume_24h: "5414361.98",
    price: "21.63",
    symbol: "UNI",
  },
  {
    id: "aave",
    last_updated: new Date().toISOString(),
    name: "Aave",
    market_cap: "6787462913.84",
    volume_24h: "4623618.73",
    price: "412.12",
    symbol: "AAVE",
  },
  {
    id: "solana",
    last_updated: new Date().toISOString(),
    name: "Solana",
    market_cap: "8577462187.45",
    volume_24h: "6618437.29",
    price: "38.87",
    symbol: "SOL",
  },
  {
    id: "vechain",
    last_updated: new Date().toISOString(),
    name: "VeChain",
    market_cap: "7343621983.23",
    volume_24h: "3328461.57",
    price: "0.13",
    symbol: "VET",
  },
  {
    id: "terra",
    last_updated: new Date().toISOString(),
    name: "Terra",
    market_cap: "9537462918.56",
    volume_24h: "7534618.73",
    price: "53.12",
    symbol: "LUNA",
  },
];

const CryptoData6: Crypto[] = [
  {
    id: "bitcoin",
    last_updated: new Date().toISOString(),
    name: "Bitcoin",
    market_cap: "564743546354.45",
    volume_24h: "440454523.17",
    price: "31014.56",
    symbol: "BTC",
  },
  {
    id: "ethereum",
    last_updated: new Date().toISOString(),
    name: "Ethereum",
    market_cap: "263743621977.67",
    volume_24h: "234326788.12",
    price: "2101.23",
    symbol: "ETH",
  },
  {
    id: "litecoin",
    last_updated: new Date().toISOString(),
    name: "Litecoin",
    market_cap: "9674625374.12",
    volume_24h: "35143622.90",
    price: "154.79",
    symbol: "LTC",
  },
  {
    id: "ripple",
    last_updated: new Date().toISOString(),
    name: "Ripple",
    market_cap: "50774652819.55",
    volume_24h: "19356342.12",
    price: "1.26",
    symbol: "XRP",
  },
  {
    id: "bitcoin-cash",
    last_updated: new Date().toISOString(),
    name: "Bitcoin Cash",
    market_cap: "8674652938.75",
    volume_24h: "17334421.45",
    price: "403.18",
    symbol: "BCH",
  },
  {
    id: "cardano",
    last_updated: new Date().toISOString(),
    name: "Cardano",
    market_cap: "54674621893.25",
    volume_24h: "23734621.37",
    price: "1.68",
    symbol: "ADA",
  },
  {
    id: "polkadot",
    last_updated: new Date().toISOString(),
    name: "Polkadot",
    market_cap: "16336219376.45",
    volume_24h: "13324621.14",
    price: "26.76",
    symbol: "DOT",
  },
  {
    id: "stellar",
    last_updated: new Date().toISOString(),
    name: "Stellar",
    market_cap: "6477462184.23",
    volume_24h: "5734261.73",
    price: "0.42",
    symbol: "XLM",
  },
  {
    id: "chainlink",
    last_updated: new Date().toISOString(),
    name: "Chainlink",
    market_cap: "10937462187.23",
    volume_24h: "8836217.35",
    price: "22.84",
    symbol: "LINK",
  },
  {
    id: "dogecoin",
    last_updated: new Date().toISOString(),
    name: "Dogecoin",
    market_cap: "32746321873.12",
    volume_24h: "32543621.54",
    price: "0.28",
    symbol: "DOGE",
  },
  {
    id: "uniswap",
    last_updated: new Date().toISOString(),
    name: "Uniswap",
    market_cap: "7834621973.43",
    volume_24h: "5614361.98",
    price: "22.63",
    symbol: "UNI",
  },
  {
    id: "aave",
    last_updated: new Date().toISOString(),
    name: "Aave",
    market_cap: "6987462913.84",
    volume_24h: "4823618.73",
    price: "422.12",
    symbol: "AAVE",
  },
  {
    id: "solana",
    last_updated: new Date().toISOString(),
    name: "Solana",
    market_cap: "8777462187.45",
    volume_24h: "6818437.29",
    price: "40.87",
    symbol: "SOL",
  },
  {
    id: "vechain",
    last_updated: new Date().toISOString(),
    name: "VeChain",
    market_cap: "7443621983.23",
    volume_24h: "3428461.57",
    price: "0.14",
    symbol: "VET",
  },
  {
    id: "terra",
    last_updated: new Date().toISOString(),
    name: "Terra",
    market_cap: "9737462918.56",
    volume_24h: "7734618.73",
    price: "54.12",
    symbol: "LUNA",
  },
];

const CryptoData7: Crypto[] = [
  {
    id: "bitcoin",
    last_updated: new Date().toISOString(),
    name: "Bitcoin",
    market_cap: "574743546354.45",
    volume_24h: "460454523.17",
    price: "31514.56",
    symbol: "BTC",
  },
  {
    id: "ethereum",
    last_updated: new Date().toISOString(),
    name: "Ethereum",
    market_cap: "273743621977.67",
    volume_24h: "254326788.12",
    price: "2151.23",
    symbol: "ETH",
  },
  {
    id: "litecoin",
    last_updated: new Date().toISOString(),
    name: "Litecoin",
    market_cap: "9774625374.12",
    volume_24h: "37143622.90",
    price: "156.79",
    symbol: "LTC",
  },
  {
    id: "ripple",
    last_updated: new Date().toISOString(),
    name: "Ripple",
    market_cap: "51774652819.55",
    volume_24h: "21356342.12",
    price: "1.28",
    symbol: "XRP",
  },
  {
    id: "bitcoin-cash",
    last_updated: new Date().toISOString(),
    name: "Bitcoin Cash",
    market_cap: "8774652938.75",
    volume_24h: "19334421.45",
    price: "408.18",
    symbol: "BCH",
  },
  {
    id: "cardano",
    last_updated: new Date().toISOString(),
    name: "Cardano",
    market_cap: "55674621893.25",
    volume_24h: "24734621.37",
    price: "1.78",
    symbol: "ADA",
  },
  {
    id: "polkadot",
    last_updated: new Date().toISOString(),
    name: "Polkadot",
    market_cap: "18336219376.45",
    volume_24h: "15324621.14",
    price: "28.76",
    symbol: "DOT",
  },
  {
    id: "stellar",
    last_updated: new Date().toISOString(),
    name: "Stellar",
    market_cap: "6577462184.23",
    volume_24h: "5934261.73",
    price: "0.44",
    symbol: "XLM",
  },
  {
    id: "chainlink",
    last_updated: new Date().toISOString(),
    name: "Chainlink",
    market_cap: "11937462187.23",
    volume_24h: "9036217.35",
    price: "24.84",
    symbol: "LINK",
  },
  {
    id: "dogecoin",
    last_updated: new Date().toISOString(),
    name: "Dogecoin",
    market_cap: "33746321873.12",
    volume_24h: "34543621.54",
    price: "0.29",
    symbol: "DOGE",
  },
  {
    id: "uniswap",
    last_updated: new Date().toISOString(),
    name: "Uniswap",
    market_cap: "8034621973.43",
    volume_24h: "6014361.98",
    price: "23.63",
    symbol: "UNI",
  },
  {
    id: "aave",
    last_updated: new Date().toISOString(),
    name: "Aave",
    market_cap: "7187462913.84",
    volume_24h: "5023618.73",
    price: "432.12",
    symbol: "AAVE",
  },
  {
    id: "solana",
    last_updated: new Date().toISOString(),
    name: "Solana",
    market_cap: "8977462187.45",
    volume_24h: "7018437.29",
    price: "42.87",
    symbol: "SOL",
  },
  {
    id: "vechain",
    last_updated: new Date().toISOString(),
    name: "VeChain",
    market_cap: "7643621983.23",
    volume_24h: "3628461.57",
    price: "0.15",
    symbol: "VET",
  },
  {
    id: "terra",
    last_updated: new Date().toISOString(),
    name: "Terra",
    market_cap: "9937462918.56",
    volume_24h: "7934618.73",
    price: "55.12",
    symbol: "LUNA",
  },
];

const CryptoData8: Crypto[] = [
  {
    id: "bitcoin",
    last_updated: new Date().toISOString(),
    name: "Bitcoin",
    market_cap: "584743546354.45",
    volume_24h: "480454523.17",
    price: "32014.56",
    symbol: "BTC",
  },
  {
    id: "ethereum",
    last_updated: new Date().toISOString(),
    name: "Ethereum",
    market_cap: "283743621977.67",
    volume_24h: "274326788.12",
    price: "2201.23",
    symbol: "ETH",
  },
  {
    id: "litecoin",
    last_updated: new Date().toISOString(),
    name: "Litecoin",
    market_cap: "9874625374.12",
    volume_24h: "39143622.90",
    price: "158.79",
    symbol: "LTC",
  },
  {
    id: "ripple",
    last_updated: new Date().toISOString(),
    name: "Ripple",
    market_cap: "52774652819.55",
    volume_24h: "23356342.12",
    price: "1.30",
    symbol: "XRP",
  },
  {
    id: "bitcoin-cash",
    last_updated: new Date().toISOString(),
    name: "Bitcoin Cash",
    market_cap: "8874652938.75",
    volume_24h: "21334421.45",
    price: "413.18",
    symbol: "BCH",
  },
  {
    id: "cardano",
    last_updated: new Date().toISOString(),
    name: "Cardano",
    market_cap: "56674621893.25",
    volume_24h: "26734621.37",
    price: "1.88",
    symbol: "ADA",
  },
  {
    id: "polkadot",
    last_updated: new Date().toISOString(),
    name: "Polkadot",
    market_cap: "19336219376.45",
    volume_24h: "17324621.14",
    price: "30.76",
    symbol: "DOT",
  },
  {
    id: "stellar",
    last_updated: new Date().toISOString(),
    name: "Stellar",
    market_cap: "6777462184.23",
    volume_24h: "6134261.73",
    price: "0.46",
    symbol: "XLM",
  },
  {
    id: "chainlink",
    last_updated: new Date().toISOString(),
    name: "Chainlink",
    market_cap: "12937462187.23",
    volume_24h: "9236217.35",
    price: "26.84",
    symbol: "LINK",
  },
  {
    id: "dogecoin",
    last_updated: new Date().toISOString(),
    name: "Dogecoin",
    market_cap: "34746321873.12",
    volume_24h: "36543621.54",
    price: "0.30",
    symbol: "DOGE",
  },
  {
    id: "uniswap",
    last_updated: new Date().toISOString(),
    name: "Uniswap",
    market_cap: "8234621973.43",
    volume_24h: "6214361.98",
    price: "24.63",
    symbol: "UNI",
  },
  {
    id: "aave",
    last_updated: new Date().toISOString(),
    name: "Aave",
    market_cap: "7387462913.84",
    volume_24h: "5223618.73",
    price: "442.12",
    symbol: "AAVE",
  },
  {
    id: "solana",
    last_updated: new Date().toISOString(),
    name: "Solana",
    market_cap: "9177462187.45",
    volume_24h: "7218437.29",
    price: "44.87",
    symbol: "SOL",
  },
  {
    id: "vechain",
    last_updated: new Date().toISOString(),
    name: "VeChain",
    market_cap: "7843621983.23",
    volume_24h: "3828461.57",
    price: "0.16",
    symbol: "VET",
  },
  {
    id: "terra",
    last_updated: new Date().toISOString(),
    name: "Terra",
    market_cap: "10137462918.56",
    volume_24h: "8134618.73",
    price: "56.12",
    symbol: "LUNA",
  },
];

const CryptoData9: Crypto[] = [
  {
    id: "bitcoin",
    last_updated: new Date().toISOString(),
    name: "Bitcoin",
    market_cap: "594743546354.45",
    volume_24h: "500454523.17",
    price: "32514.56",
    symbol: "BTC",
  },
  {
    id: "ethereum",
    last_updated: new Date().toISOString(),
    name: "Ethereum",
    market_cap: "293743621977.67",
    volume_24h: "294326788.12",
    price: "2251.23",
    symbol: "ETH",
  },
  {
    id: "litecoin",
    last_updated: new Date().toISOString(),
    name: "Litecoin",
    market_cap: "9974625374.12",
    volume_24h: "41143622.90",
    price: "160.79",
    symbol: "LTC",
  },
  {
    id: "ripple",
    last_updated: new Date().toISOString(),
    name: "Ripple",
    market_cap: "53774652819.55",
    volume_24h: "25356342.12",
    price: "1.32",
    symbol: "XRP",
  },
  {
    id: "bitcoin-cash",
    last_updated: new Date().toISOString(),
    name: "Bitcoin Cash",
    market_cap: "8974652938.75",
    volume_24h: "23334421.45",
    price: "418.18",
    symbol: "BCH",
  },
  {
    id: "cardano",
    last_updated: new Date().toISOString(),
    name: "Cardano",
    market_cap: "57674621893.25",
    volume_24h: "28734621.37",
    price: "1.98",
    symbol: "ADA",
  },
  {
    id: "polkadot",
    last_updated: new Date().toISOString(),
    name: "Polkadot",
    market_cap: "20336219376.45",
    volume_24h: "19324621.14",
    price: "32.76",
    symbol: "DOT",
  },
  {
    id: "stellar",
    last_updated: new Date().toISOString(),
    name: "Stellar",
    market_cap: "6977462184.23",
    volume_24h: "6334261.73",
    price: "0.48",
    symbol: "XLM",
  },
  {
    id: "chainlink",
    last_updated: new Date().toISOString(),
    name: "Chainlink",
    market_cap: "13937462187.23",
    volume_24h: "9436217.35",
    price: "28.84",
    symbol: "LINK",
  },
  {
    id: "dogecoin",
    last_updated: new Date().toISOString(),
    name: "Dogecoin",
    market_cap: "35746321873.12",
    volume_24h: "38543621.54",
    price: "0.31",
    symbol: "DOGE",
  },
  {
    id: "uniswap",
    last_updated: new Date().toISOString(),
    name: "Uniswap",
    market_cap: "8434621973.43",
    volume_24h: "6414361.98",
    price: "25.63",
    symbol: "UNI",
  },
  {
    id: "aave",
    last_updated: new Date().toISOString(),
    name: "Aave",
    market_cap: "7587462913.84",
    volume_24h: "5423618.73",
    price: "452.12",
    symbol: "AAVE",
  },
  {
    id: "solana",
    last_updated: new Date().toISOString(),
    name: "Solana",
    market_cap: "9377462187.45",
    volume_24h: "7418437.29",
    price: "46.87",
    symbol: "SOL",
  },
  {
    id: "vechain",
    last_updated: new Date().toISOString(),
    name: "VeChain",
    market_cap: "8043621983.23",
    volume_24h: "4028461.57",
    price: "0.17",
    symbol: "VET",
  },
  {
    id: "terra",
    last_updated: new Date().toISOString(),
    name: "Terra",
    market_cap: "10337462918.56",
    volume_24h: "8334618.73",
    price: "57.12",
    symbol: "LUNA",
  },
];

const CryptoData10: Crypto[] = [
  {
    id: "bitcoin",
    last_updated: new Date().toISOString(),
    name: "Bitcoin",
    market_cap: "604743546354.45",
    volume_24h: "520454523.17",
    price: "33014.56",
    symbol: "BTC",
  },
  {
    id: "ethereum",
    last_updated: new Date().toISOString(),
    name: "Ethereum",
    market_cap: "303743621977.67",
    volume_24h: "314326788.12",
    price: "2301.23",
    symbol: "ETH",
  },
  {
    id: "litecoin",
    last_updated: new Date().toISOString(),
    name: "Litecoin",
    market_cap: "10074625374.12",
    volume_24h: "43143622.90",
    price: "162.79",
    symbol: "LTC",
  },
  {
    id: "ripple",
    last_updated: new Date().toISOString(),
    name: "Ripple",
    market_cap: "54774652819.55",
    volume_24h: "27356342.12",
    price: "1.34",
    symbol: "XRP",
  },
  {
    id: "bitcoin-cash",
    last_updated: new Date().toISOString(),
    name: "Bitcoin Cash",
    market_cap: "9074652938.75",
    volume_24h: "25334421.45",
    price: "423.18",
    symbol: "BCH",
  },
  {
    id: "cardano",
    last_updated: new Date().toISOString(),
    name: "Cardano",
    market_cap: "58674621893.25",
    volume_24h: "30734621.37",
    price: "2.08",
    symbol: "ADA",
  },
  {
    id: "polkadot",
    last_updated: new Date().toISOString(),
    name: "Polkadot",
    market_cap: "21336219376.45",
    volume_24h: "21324621.14",
    price: "34.76",
    symbol: "DOT",
  },
  {
    id: "stellar",
    last_updated: new Date().toISOString(),
    name: "Stellar",
    market_cap: "7177462184.23",
    volume_24h: "6534261.73",
    price: "0.50",
    symbol: "XLM",
  },
  {
    id: "chainlink",
    last_updated: new Date().toISOString(),
    name: "Chainlink",
    market_cap: "14937462187.23",
    volume_24h: "9636217.35",
    price: "30.84",
    symbol: "LINK",
  },
  {
    id: "dogecoin",
    last_updated: new Date().toISOString(),
    name: "Dogecoin",
    market_cap: "36746321873.12",
    volume_24h: "40543621.54",
    price: "0.32",
    symbol: "DOGE",
  },
  {
    id: "uniswap",
    last_updated: new Date().toISOString(),
    name: "Uniswap",
    market_cap: "8634621973.43",
    volume_24h: "6614361.98",
    price: "26.63",
    symbol: "UNI",
  },
  {
    id: "aave",
    last_updated: new Date().toISOString(),
    name: "Aave",
    market_cap: "7787462913.84",
    volume_24h: "5623618.73",
    price: "462.12",
    symbol: "AAVE",
  },
  {
    id: "solana",
    last_updated: new Date().toISOString(),
    name: "Solana",
    market_cap: "9577462187.45",
    volume_24h: "7618437.29",
    price: "48.87",
    symbol: "SOL",
  },
  {
    id: "vechain",
    last_updated: new Date().toISOString(),
    name: "VeChain",
    market_cap: "8243621983.23",
    volume_24h: "4228461.57",
    price: "0.18",
    symbol: "VET",
  },
  {
    id: "terra",
    last_updated: new Date().toISOString(),
    name: "Terra",
    market_cap: "10537462918.56",
    volume_24h: "8534618.73",
    price: "58.12",
    symbol: "LUNA",
  },
];

export {
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
};