import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppLoader, DataTable, AppContainer } from "components";
import moment from "moment";
import SyncIcon from "@material-ui/icons/Sync";
import { Grid, Paper, Typography } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import purple from "@material-ui/core/colors/purple";
import teal from "@material-ui/core/colors/teal";

const useStyles = makeStyles((theme) => ({
  root: {},
  gridContainer: {
    marginBottom: 20,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    margin: "0 0 20px",
  },
  values: {
    fontSize: 14,
    lineHeight: 1.5,
  },
  upArrow: {
    color: purple[500],
    fontSize: 100,
    [theme.breakpoints.down("sm")]: {
      fontSize: 70,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 40,
    },
  },
  downArrow: {
    color: teal[500],
    fontSize: 100,
    [theme.breakpoints.down("sm")]: {
      fontSize: 70,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 40,
    },
  },
}));

const columns = [
  {
    title: "Date",
    field: "x",
    searchable: false,
    grouping: false,
    sorting: true,
    type: "date",
    align: "center",
    render: (rowData) => (
      <p style={{ margin: 0 }}>{moment(rowData.x).format("MMM DD, YYYY")}</p>
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

function Home({ loading, historicalData, maxMin, setCurrentPage }) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <AppContainer>
        {maxMin && (
          <Grid container className={classes.gridContainer} spacing={2}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <div className={classes.left}>
                  <Typography variant="h3" className={classes.title}>
                    Maximum
                  </Typography>
                  <Typography variant="h3" className={classes.values}>
                    {`Open:- ₹${maxMin.maxOpen.open} on ${moment(
                      Number(maxMin.maxOpen.x)
                    ).format("MMM DD, YYYY")}`}
                  </Typography>
                  <Typography variant="h3" className={classes.values}>
                    {`High:- ₹${maxMin.maxHigh.high} on ${moment(
                      Number(maxMin.maxHigh.x)
                    ).format("MMM DD, YYYY")}`}
                  </Typography>
                  <Typography variant="h3" className={classes.values}>
                    {`Low:- ₹${maxMin.maxLow.low} on ${moment(
                      Number(maxMin.maxLow.x)
                    ).format("MMM DD, YYYY")}`}
                  </Typography>
                  <Typography variant="h3" className={classes.values}>
                    {`Close:- ₹${maxMin.maxClosed.open} on ${moment(
                      Number(maxMin.maxClosed.x)
                    ).format("MMM DD, YYYY")}`}
                  </Typography>
                </div>
                <div className={classes.right}>
                  <ArrowUpwardIcon className={classes.upArrow} />
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <div className={classes.left}>
                  <Typography variant="h3" className={classes.title}>
                    Minimum
                  </Typography>
                  <Typography variant="h3" className={classes.values}>
                    {`Open:- ₹${maxMin.minOpen.open} on ${moment(
                      Number(maxMin.minOpen.x)
                    ).format("MMM DD, YYYY")}`}
                  </Typography>
                  <Typography variant="h3" className={classes.values}>
                    {`High:- ₹${maxMin.minHigh.high} on ${moment(
                      Number(maxMin.minHigh.x)
                    ).format("MMM DD, YYYY")}`}
                  </Typography>
                  <Typography variant="h3" className={classes.values}>
                    {`Low:- ₹${maxMin.minLow.low} on ${moment(
                      Number(maxMin.minLow.x)
                    ).format("MMM DD, YYYY")}`}
                  </Typography>
                  <Typography variant="h3" className={classes.values}>
                    {`Close:- ₹${maxMin.minClosed.open} on ${moment(
                      Number(maxMin.minClosed.x)
                    ).format("MMM DD, YYYY")}`}
                  </Typography>
                </div>
                <div className={classes.right}>
                  <ArrowDownwardIcon className={classes.downArrow} />
                </div>
              </Paper>
            </Grid>
          </Grid>
        )}

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
          options={{ maxBodyHeight: "calc(100vh - 430px)" }}
        />
      </AppContainer>

      <AppLoader isLoading={loading} />
    </section>
  );
}

export default Home;
