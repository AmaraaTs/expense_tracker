import { DashboardContext } from "@/app/context/dashboard-context";
import { useContext, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({}) => {
  const { donut } = useContext(DashboardContext);

  const lbl = donut?.map((b) => b.cat_name);
  const val = donut?.map((b) => b.sum);
  const data2 = {
    datasets: [
      {
        data: val,

        backgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
        hoverBackgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
      },
    ],
    labels: lbl,
  };

  const options2 = {
    legend: {
      align: "start",
      position: "right",

      labels: {
        display: false,
        position: "right",
      },
    },
  };

  return (
    <div className="flex items-center justify-center p-4 bg-white card h-[228px]">
      <div className="h-[228px]">
        <Doughnut options={options2} data={data2} />
      </div>
    </div>
  );
};

export default DoughnutChart;
