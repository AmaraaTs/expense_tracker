"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../utils/util";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [chartData, setChartData] = useState(null);
  const getChartData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/chart`);
      console.log("ST", res.data.donut, res.data.bar);
      setChartData({ donut: res.data.donut, bar: res.data.bar });
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch chart data");
    }
  };
  useEffect(() => {
    getChartData();
  });
  return (
    <DashboardContext.Provider
      value={{ donut: chartData?.donut, bar: chartData?.bar }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
