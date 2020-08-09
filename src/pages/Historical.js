import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppLoader, AppContainer, HolcChart } from "components";
import SyncIcon from "@material-ui/icons/Sync";
import { Tooltip as MaterialTooltip, IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 24,
    fontWeight: 600,
    margin: 0,
    lineHeight: 1.5,
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 0 20px",
  },
}));

function Historical({ loading, historicalData, setCurrentPage }) {
  const classes = useStyles();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={classes.root}>
      <AppContainer>
        <div className={classes.row}>
          <h1 className={classes.title}> Upstox Historical Chart</h1>
          <MaterialTooltip title="Fetch More Records">
            <IconButton
              aria-label="Fetch More Records"
              onClick={() => {
                setCurrentPage((prevState) => prevState + 1);
              }}
            >
              <SyncIcon />
            </IconButton>
          </MaterialTooltip>
        </div>

        <HolcChart holcData={historicalData} />
      </AppContainer>

      <AppLoader isLoading={loading} />
    </section>
  );
}

export default Historical;
