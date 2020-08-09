import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import { makeStyles } from "@material-ui/core/styles";
import { AppContainer } from "components";
import { convertToJson } from "helper";
import {
  StockChartComponent,
  StockChartSeriesCollectionDirective,
  StockChartSeriesDirective,
  Inject,
  DateTime,
  StripLine,
  LineSeries,
  SplineSeries,
  CandleSeries,
  HiloOpenCloseSeries,
  HiloSeries,
  RangeAreaSeries,
  Trendlines,
  Zoom,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  EmaIndicator,
  RsiIndicator,
  BollingerBands,
  TmaIndicator,
  MomentumIndicator,
  SmaIndicator,
  AtrIndicator,
  AccumulationDistributionIndicator,
  MacdIndicator,
  StochasticIndicator,
  Export,
} from "@syncfusion/ej2-react-charts";
import { getElement } from "@syncfusion/ej2-charts";

const clientSocket = socketIOClient(process.env.REACT_APP_LIVE_CHART_ENDPOINT);

const keys = ["x", "open", "high", "low", "close", "volume"];

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
      stoxData.push(data);
      let liveData = convertToJson(stoxData, keys);
      if (liveData.length > 20)
        liveData = liveData.slice(liveData.length - 20, liveData.length);
      setLiveData(liveData);
      callback(1);
    });

    clientSocket.on("error", function (error) {
      console.error("Error: " + error);
    });

    return () => clientSocket.emit("unsub", { state: false });
  }, []);

  const loaded = (args) => {
    const setTimeoutValue = 100;
    const intervalId = setInterval(() => {
      if (getElement("stockchartplotline") === null) {
        clearInterval(intervalId);
      } else {
        if (args.stockChart) args.stockChart.refresh();
      }
    }, setTimeoutValue);
  };

  const chart = () => {
    if (liveData && liveData.length) {
      return (
        <StockChartComponent
          id="stockchartplotline"
          style={{ textAlign: "center", height: "calc(100% - 20px)" }}
          loaded={loaded}
          primaryXAxis={{
            valueType: "DateTime",
            majorGridLines: { color: "transparent" },
          }}
          primaryYAxis={{
            lineStyle: { color: "transparent" },
            majorTickLines: { color: "transparent", width: 0 },
          }}
          indicatorType={[]}
          seriesType={[]}
          chartArea={{ border: { width: 0 } }}
          zoomSettings={{
            enableMouseWheelZooming: true,
            enablePinchZooming: true,
            enableSelectionZooming: true,
            mode: "X",
            enableScrollbar: true,
          }}
        >
          <Inject
            services={[
              DateTime,
              StripLine,
              LineSeries,
              SplineSeries,
              Tooltip,
              CandleSeries,
              HiloOpenCloseSeries,
              HiloSeries,
              RangeAreaSeries,
              Trendlines,
              EmaIndicator,
              RsiIndicator,
              BollingerBands,
              TmaIndicator,
              MomentumIndicator,
              SmaIndicator,
              AtrIndicator,
              Zoom,
              Export,
              AccumulationDistributionIndicator,
              MacdIndicator,
              StochasticIndicator,
            ]}
          />
          <StockChartSeriesCollectionDirective>
            <StockChartSeriesDirective
              dataSource={liveData}
              xName="x"
              yName="open"
              type="Line"
            ></StockChartSeriesDirective>
            <StockChartSeriesDirective
              dataSource={liveData}
              xName="x"
              yName="high"
              type="Line"
            ></StockChartSeriesDirective>
            <StockChartSeriesDirective
              dataSource={liveData}
              xName="x"
              yName="low"
              type="Line"
            ></StockChartSeriesDirective>
            <StockChartSeriesDirective
              dataSource={liveData}
              xName="x"
              yName="close"
              type="Line"
            ></StockChartSeriesDirective>
          </StockChartSeriesCollectionDirective>
        </StockChartComponent>
      );
    }
    return <p>Loading...</p>;
  };

  return (
    <section className={classes.root}>
      <AppContainer>
        <h1 className={classes.title}> Upstox Live Chart</h1>
        {chart()}
      </AppContainer>
    </section>
  );
}

export default LiveChart;
