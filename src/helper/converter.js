export const convertToJson = (data, keys, delim = ",") =>
  data.reduce((initial, current) => {
    const splitedData = current.split(delim);
    const obj = keys.reduce(
      (acc, key, index) => (acc = { ...acc, [key]: splitedData[index] }),
      {}
    );
    return [...initial, obj];
  }, []);

export const getMaxMin = (data) => {
  let maxOpen = data.sort((a, b) => b.open - a.open)[0],
    minOpen = data.sort((a, b) => a.open - b.open)[0],
    maxHigh = data.sort((a, b) => b.high - a.high)[0],
    minHigh = data.sort((a, b) => a.high - b.high)[0],
    maxLow = data.sort((a, b) => b.low - a.low)[0],
    minLow = data.sort((a, b) => a.low - b.low)[0],
    maxClosed = data.sort((a, b) => b.close - a.close)[0],
    minClosed = data.sort((a, b) => a.close - b.close)[0];

  return {
    maxOpen,
    minOpen,
    maxHigh,
    minHigh,
    maxLow,
    minLow,
    maxClosed,
    minClosed,
  };
};
