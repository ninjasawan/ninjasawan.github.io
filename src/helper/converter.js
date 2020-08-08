export const convertToJson = (data, keys, delim = ",") =>
  data.reduce((initial, current) => {
    const splitedData = current.split(delim);
    const obj = keys.reduce(
      (acc, key, index) => (acc = { ...acc, [key]: splitedData[index] }),
      {}
    );
    return [...initial, obj];
  }, []);
