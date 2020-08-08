import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import { makeStyles } from "@material-ui/core/styles";
import { AppContainer } from "components";
import { convertToJson } from "helper";

const url = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_LIVE_CHART_ENDPOINT}`;

const clientSocket = socketIOClient(url);

const keys = ["timestamp", "open", "high", "low", "close", "volume"];

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function LiveChart() {
  const classes = useStyles();
  const [liveData, setLiveData] = useState([]);

  useEffect(() => {
    clientSocket.emit("sub", { state: true });

    const stoxData = [];
    clientSocket.on("data", function (data, callback) {
      stoxData.push(data);
      setLiveData(convertToJson(stoxData, keys));
      callback(1);
    });

    clientSocket.on("error", function (error) {
      console.error("Error: " + error);
    });

    return () => clientSocket.emit("unsub", { state: false });
  }, []);

  //console.log({ liveData });

  return (
    <section className={classes.root}>
      <AppContainer>
        <p>LiveChart</p>
      </AppContainer>
    </section>
  );
}

export default LiveChart;
