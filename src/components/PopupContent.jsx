import React from "react";
import LineChartComponent from "./LineChart";

const PopupContent = ({ name, confirmedText, salesData }) => (
  <div>
    {salesData != null ?
      (<div
        style={{
          height: "350px",
          width: "400px"
        }}
      >
        <div
          style={{
            height: "300px",
            width: "303px"
          }}
        >
          <h5 style={{ marginTop: "20px" }}>{name}: Sales Data</h5>
          <LineChartComponent salesData={salesData} />
        </div>
      </div>)
      :
      (<div>{name}: No Sales Data </div>)
    }
  </div>
);

export default PopupContent;