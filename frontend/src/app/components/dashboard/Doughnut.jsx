import { DashboardContext } from "@/app/context/dashboard-context";
import { apiUrl } from "@/app/utils/util";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({}) => {
  const { donut } = useContext(DashboardContext);
  // const [doughnutChartInfo, setDoughnutChartInfo] = useState(null);
  // const getDoughnutChartData = async () => {
  //   try {
  //     const res = await axios.get(`${apiUrl}/records/chart`);
  //     console.log("ST", res.data);
  //     setDoughnutChartInfo(res.data);
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Failed to fetch transactions");
  //   }
  // };
  // useEffect(() => {
  //   getDoughnutChartData();
  // }, []);
  // const lbl = doughnutChartInfo?.donut.map((b) => b.cat_name);
  // const val = doughnutChartInfo?.donut.map((b) => b.sum);
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
        {/* {categoryData && <Doughnut options={options2} data={data2} />}
        {!categoryData && (
          <div className="flex items-center justify-center w-full h-full gap-4">
            <div className="w-24 h-24 rounded-full skeleton"></div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default DoughnutChart;
