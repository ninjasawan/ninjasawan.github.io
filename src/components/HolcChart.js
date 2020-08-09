import React, { useEffect } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloOpenCloseSeries,
  Category,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair,
  ScrollBar,
} from "@syncfusion/ej2-react-charts";

function HolcChart({ holcData }) {
  useEffect(() => {
    for (let i = 0; i < holcData.length; i++) {
      holcData[i]["timestamp"] = new Date(+holcData[i].timestamp);
      holcData[i]["open"] = Number(holcData[i].open);
      holcData[i]["high"] = Number(holcData[i].high);
      holcData[i]["low"] = Number(holcData[i].low);
      holcData[i]["close"] = Number(holcData[i].close);
      holcData[i]["volume"] = Number(holcData[i].volume);
    }
  }, [holcData]);

  const axisLabelRender = (args) => {
    console.log(args);
    if (args.axis.title === "Price") {
      args.text = "₹" + args.text;
    }
  };

  return (
    <ChartComponent
      id="charts"
      style={{ textAlign: "center", height: "calc(100% - 60px)" }}
      primaryXAxis={{
        valueType: "DateTime",
        crosshairTooltip: { enable: true },
        majorGridLines: { width: 0 },
      }}
      primaryYAxis={{
        title: "Price",
        rangePadding: "None",
        labelFormat: "n0",
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
      }}
      chartArea={{ border: { width: 0 } }}
      tooltip={{
        enable: true,
        shared: true,
      }}
      axisLabelRender={axisLabelRender}
      width="100%"
      legendSettings={{ visible: false }}
      zoomSettings={{
        enableMouseWheelZooming: true,
        enablePinchZooming: true,
        enableSelectionZooming: true,
        mode: "X",
        enableScrollbar: true,
      }}
      crosshair={{
        enable: true,
        lineType: "Vertical",
        line: { width: 0 },
      }}
    >
      <Inject
        services={[
          HiloOpenCloseSeries,
          Category,
          Tooltip,
          DateTime,
          Zoom,
          Logarithmic,
          Crosshair,
          ScrollBar,
        ]}
      />
      <SeriesCollectionDirective>
        <SeriesDirective
          type="HiloOpenClose"
          dataSource={holcData}
          animation={{ enable: true }}
          bearFillColor="#2ecd71"
          bullFillColor="#e74c3d"
          xName="timestamp"
          low="low"
          high="high"
          open="open"
          close="close"
          name="Upstox"
        ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default HolcChart;
