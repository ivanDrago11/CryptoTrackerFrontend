export const generateRandomPriceChange = (currentPrice: number): number => {
  const changePercent = (Math.random() - 0.5) * 0.1; // Random change between -5% and +5%
  return currentPrice * (1 + changePercent);
};

export const roundNumber = (value: string): string => {
  const number = parseFloat(value);
  const price = number.toFixed(2);
  return price;
};

export const getFormatDate = (): string => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${month}-${day}-${year} ${hours}:${minutes}:${seconds}`;
};
