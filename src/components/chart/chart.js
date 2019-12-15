import React from "react";
import { Line } from "react-chartjs-2";

const Chart = ({data}) => {
  const chartData = {
    labels: data.labels[0] ? data.labels : [],
    datasets: [
      {
        label: data.fullname,
        fill: false,
        lineTension: 0.4,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "#3A80BA",
        borderCapStyle: "butt",
        borderJoinStyle: "miter",
        pointBorderColor: "#3A80BA",
        pointBackgroundColor: "#3A80BA",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#3A80BA",
        pointHoverBorderColor: "#3A80BA",
        pointHoverBorderWidth: 4,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data.data
      }
    ]
  };

  return (
    <div className="mb-5">
      <Line data={chartData} />
    </div>
  );
};

export default Chart;
