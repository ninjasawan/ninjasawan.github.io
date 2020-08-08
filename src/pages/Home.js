import React, { useEffect, useState } from "react";
import { fetchWrapper, convertToJson } from "helper";
import { makeStyles } from "@material-ui/core/styles";
import { AppLoader, DataTable, AppContainer } from "components";
import moment from "moment";
import SyncIcon from "@material-ui/icons/Sync";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const columns = [
  {
    title: "Date",
    field: "timestamp",
    searchable: false,
    grouping: false,
    sorting: true,
    type: "date",
    align: "center",
    render: (rowData) => (
      <p style={{ margin: 0 }}>
        {moment(Number(rowData.timestamp)).format("MMM DD, YYYY")}
      </p>
    ),
  },
  {
    title: "Open Price",
    field: "open",
    searchable: false,
    grouping: false,
    sorting: true,
    type: "currency",
    align: "center",
    currencySetting: { currencyCode: "INR" },
    cellStyle: {
      padding: 5,
    },
  },
  {
    title: "Highest Price",
    field: "high",
    searchable: false,
    grouping: false,
    sorting: true,
    type: "currency",
    align: "center",
    currencySetting: { currencyCode: "INR" },
    cellStyle: {
      padding: 5,
    },
  },
  {
    title: "Lowest Price",
    field: "low",
    searchable: false,
    grouping: false,
    sorting: true,
    type: "currency",
    align: "center",
    currencySetting: { currencyCode: "INR" },
    cellStyle: {
      padding: 5,
    },
  },
  {
    title: "Closed Price",
    field: "close",
    searchable: false,
    grouping: false,
    sorting: true,
    type: "currency",
    align: "center",
    currencySetting: { currencyCode: "INR" },
    cellStyle: {
      padding: 5,
    },
  },
  {
    title: "Remaning Volume",
    field: "volume",
    searchable: false,
    grouping: false,
    sorting: true,
    type: "numeric",
    align: "center",
    cellStyle: {
      padding: 5,
    },
  },
];

const keys = ["timestamp", "open", "high", "low", "close", "volume"];

function Home() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [historicalData, setHistoricalData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetchWrapper
      .get(`${process.env.REACT_APP_HISTORY_ENDPOINT}?interval=${currentPage}`)
      .then((response) => {
        setHistoricalData(convertToJson(response, keys));
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [currentPage]);

  return (
    <section className={classes.root}>
      <AppContainer>
        <DataTable
          title="Historical Records"
          columns={columns}
          data={historicalData}
          actions={[
            {
              icon: SyncIcon,
              tooltip: "Fetch More Records",
              isFreeAction: true,
              onClick: (event) => {
                setCurrentPage((prevState) => prevState + 1);
              },
            },
          ]}
          options={{ maxBodyHeight: "calc(100vh - 250px)" }}
        />
      </AppContainer>

      <AppLoader isLoading={loading} />
    </section>
  );
}

export default Home;
