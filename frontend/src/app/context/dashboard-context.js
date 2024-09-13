"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../utils/util";
import { UserContext } from "./user-context";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);
  const [cardInfo, setCardInfo] = useState(null);
  const [chartData, setChartData] = useState(null);

  const fetchTransactions = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${apiUrl}/records`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTransactions(res.data.records);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
    }
  };
  const getInfoCardData = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${apiUrl}/records/info`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("ST", res.data);
      setCardInfo(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch getInfoCard");
    }
  };
  const getChartData = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${apiUrl}/records/chart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("ST", res.data.donut, res.data.bar);
      setChartData({ donut: res.data.donut, bar: res.data.bar });
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch chart data");
    }
  };
  useEffect(() => {
    fetchTransactions();
    getInfoCardData();
    getChartData();
  }, []);
  return (
    <DashboardContext.Provider
      value={{
        donut: chartData?.donut,
        bar: chartData?.bar,
        transactions,
        cardInfo,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
