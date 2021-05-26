import React from "react";
import { connect } from "react-redux";
import "./styles.css";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const formatMeasurements = (list) => {
  const m = [];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  for (let i in list) {
    const d = new Date(i);
    const final = `${monthNames[d.getUTCMonth()]} 
      ${d.getUTCFullYear()}`;
    m.push({
      date: final,
      value: list[i],
    });
  }
  return m;
};

const AssetDisplay = ({ assetMeasurements }) => {
  if (assetMeasurements && assetMeasurements.measurements) {
    const measures = formatMeasurements(assetMeasurements.measurements);
    const renderLineChart = (
      <LineChart width={1400} height={600} data={measures}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
      </LineChart>
    );
    return <div className="asset-display">{renderLineChart}</div>;
  }
  return "Show sum of children";
};

function mapStateToProps(state) {
  return { assetMeasurements: state.assetMeasurements };
}

export default connect(mapStateToProps)(AssetDisplay);
