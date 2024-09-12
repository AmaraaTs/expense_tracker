import { DashboardContext } from "@/app/context/dashboard-context";
import { useContext, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({}) => {
  const { bar } = useContext(DashboardContext);

  const lbl = bar?.map((b) => b.month);
  const inc = bar?.map((b) => b.total_inc);
  const exp = bar?.map((b) => b.total_exp);
  const data1 = {
    labels: lbl,
    datasets: [
      {
        label: "Income",
        backgroundColor: "#22C55E",
        data: inc,
      },
      {
        label: "Expense",
        backgroundColor: "#F87171",
        data: exp,
      },
    ],
  };

  const options1 = {
    responsive: true,

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex items-center justify-center p-4 bg-white card h-[228px]">
      <Bar data={data1} options={options1} />
    </div>
  );
};

export default BarChart;
