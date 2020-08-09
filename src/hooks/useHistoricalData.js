import { useEffect, useState } from "react";
import { fetchWrapper, convertToJson, getMaxMin } from "helper";

const keys = ["timestamp", "open", "high", "low", "close", "volume"];

const useHistoricalData = () => {
  const [loading, setLoading] = useState(false);
  const [historicalData, setHistoricalData] = useState([]);
  const [maxMin, setMaxMin] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetchWrapper
      .get(`${process.env.REACT_APP_HISTORY_ENDPOINT}?interval=${currentPage}`)
      .then((response) => {
        const data = convertToJson(response, keys);
        setHistoricalData(data);
        setMaxMin(getMaxMin(data));
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [currentPage]);

  return {
    loading,
    setLoading,
    historicalData,
    setHistoricalData,
    maxMin,
    setMaxMin,
    currentPage,
    setCurrentPage,
  };
};

export default useHistoricalData;
