import { apiUrl } from "@/app/utils/util";
import axios from "axios";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ barChartData }) => {
  const [barChartInfo, setBarChartInfo] = useState(null);
  const getBarChartData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/chart`);
      console.log("ST", res.data);
      setBarChartInfo(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
    }
  };
  useEffect(() => {
    getBarChartData();
  }, []);
  const data1 = {
    labels: [
      barChartInfo.map((i) => {
        i.bar.name;
      }),
    ],
    datasets: [
      {
        label: "Income",
        backgroundColor: "#22C55E",
        data: [20_000],
      },
      {
        label: "Expense",
        backgroundColor: "#F87171",
        data: [15_000],
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
      {/* {barChartData && <Bar data={data1} options={options1} />} */}
      <Bar data={data1} options={options1} />
      {/* {!barChartData && (
        <div className="flex items-end justify-center w-full gap-4 ">
          <div className="w-4 skeleton h-14"></div>
          <div className="w-4 h-16 skeleton"></div>
          <div className="w-4 h-24 skeleton"></div>
          <div className="w-4 h-24 skeleton"></div>
          <div className="w-4 h-24 skeleton"></div>
          <div className="w-4 h-16 skeleton"></div>
          <div className="w-4 skeleton h-14"></div>
        </div>
      )} */}
    </div>
  );
};

export default BarChart;
