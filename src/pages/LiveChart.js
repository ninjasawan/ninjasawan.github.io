import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import { makeStyles } from "@material-ui/core/styles";
import { AppContainer } from "components";
import { convertToJson } from "helper";

const clientSocket = socketIOClient(process.env.REACT_APP_LIVE_CHART_ENDPOINT);

const keys = ["timestamp", "open", "high", "low", "close", "volume"];

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 24,
    fontWeight: 600,
    margin: "0 0 20px",
    lineHeight: 1.5,
  },
}));

function LiveChart() {
  const classes = useStyles();
  const [liveData, setLiveData] = useState([]);

  useEffect(() => {
    clientSocket.emit("sub", { state: true });

    const stoxData = [];
    clientSocket.on("data", function (data, callback) {
      //stoxData.push(data);
      //console.log(data);
      setLiveData(convertToJson([data], keys));
      callback(1);
    });

    clientSocket.on("error", function (error) {
      console.error("Error: " + error);
    });

    return () => clientSocket.emit("unsub", { state: false });
  }, []);

  //console.log(liveData);

  return (
    <section className={classes.root}>
      <AppContainer>
        <h1 className={classes.title}> Upstox Live Chart</h1>
      </AppContainer>
    </section>
  );
}

export default LiveChart;
