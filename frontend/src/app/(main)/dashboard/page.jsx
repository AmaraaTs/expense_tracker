"use client";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { apiUrl } from "@/app/utils/util";
import { UserContext } from "@/app/context/user-context";
import { HiSignal } from "react-icons/hi2";
import { GoDotFill } from "react-icons/go";
import { FaCircleArrowUp } from "react-icons/fa6";
import { FaCircleArrowDown } from "react-icons/fa6";
import AddRecord from "@/app/components/addRecord";
import BarChart from "@/app/components/dashboard/BarChart";

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
} from "chart.js";
import DoughnutChart from "@/app/components/dashboard/Doughnut";
import { Doughnut } from "react-chartjs-2";
import RecordList from "@/app/components/recordList";
import { DashboardContext } from "@/app/context/dashboard-context";
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Legend);

const Dashboard = () => {
  // const { user } = useContext(UserContext);
  const { transactions, cardInfo } = useContext(DashboardContext);
  // const [transactions, setTransactions] = useState([]);
  // const [cardInfo, setCardInfo] = useState(null);

  // const fetchTransactions = async () => {
  //   try {
  //     const res = await axios.get(`${apiUrl}/records`);
  //     console.log("DD", res.data.records);
  //     setTransactions(res.data.records);
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Failed to fetch transactions");
  //   }
  // };

  // const getInfoCardData = async () => {
  //   try {
  //     const res = await axios.get(`${apiUrl}/records/info`);
  //     console.log("ST", res.data);
  //     setCardInfo(res.data);
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Failed to fetch getInfoCard");
  //   }
  // };

  // useEffect(() => {
  //   fetchTransactions();
  //   getInfoCardData();
  // }, [user]);

  return (
    <div>
      <div className="max-w-[2000px] mx-auto  mt-8">
        {/*  */}
        <div className="w-full flex justify-between h-[240px]">
          <div className="bg-[#0166FF] w-[600px] h-full rounded-[18px] p-8 flex justify-between">
            <div className="flex flex-col justify-between">
              <img src="/img/Geld-white.png" alt="photo" className="w-20" />
              <div>
                <p className="text-base text-white opacity-50">Cash</p>
                <p className="text-2xl font-semibold text-white">1,000₮</p>
              </div>
            </div>
            <HiSignal size={40} color="white" />
          </div>
          <div className="w-[600px] h-full rounded-[18px] bg-white">
            <div className="flex gap-2 items-center border-b-[1px] px-6 py-4 border-[#E2E8F0]">
              <GoDotFill size={8} color="#84CC16" />
              <p className="font-semibold text-base">Your Income</p>
            </div>
            <div className="py-5 px-6">
              <h3 className="text-4xl font-semibold">
                {Number(cardInfo?.income.sum).toLocaleString("en")}₮
              </h3>
              <p className="text-[18px] text-[#64748B] mt-1">
                Your Income Amount
              </p>
              <div className="mt-[18px] flex gap-2 items-center">
                <FaCircleArrowUp size={19.5} color="#84CC16" />
                <p className="text-[18px]">32% from last month</p>
              </div>
            </div>
          </div>
          <div className="w-[600px] h-full rounded-[18px] bg-white">
            <div className="flex gap-2 items-center border-b-[1px] px-6 py-4 border-[#E2E8F0]">
              <GoDotFill size={8} color="#0166FF" />
              <p className="font-semibold text-base">Total Expenses</p>
            </div>
            <div className="py-5 px-6">
              <h3 className="text-4xl font-semibold">
                -{Number(cardInfo?.expense.sum).toLocaleString("en")}₮
              </h3>
              <p className="text-[18px] text-[#64748B] mt-1">
                Your expence Amount
              </p>
              <div className="mt-[18px] flex gap-2 items-center">
                <FaCircleArrowDown size={19.5} color="#0166FF" />
                <p className="text-[18px]">32% from last month</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex mt-6 gap-6">
          <div className="w-1/2 rounded-xl">
            <div className="border-b-[1px] border-[#E2E8F0] bg-white px-4 py-6 text-base font-semibold rounded-t-xl">
              Income - Expense
            </div>
            <div className=" h-[284px] bg-white px-6 py-8 rounded-b-xl">
              <BarChart />
            </div>
          </div>
          <div className="w-1/2 rounded-xl">
            <div className="border-b-[1px] border-[#E2E8F0] bg-white px-4 py-6 text-base font-semibold rounded-t-xl">
              Income - Expense
            </div>
            <div className=" h-[284px] bg-white px-6 py-8 rounded-b-xl">
              <DoughnutChart />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="border-b-[1px] border-[#E2E8F0] bg-white px-4 py-6 mt-6 text-base font-semibold rounded-t-xl">
          Last records
        </div>
        {/* GUILGEENII JAGSAALT */}
        <RecordList />
        {/* <AddRecord /> */}
      </div>
    </div>
  );
};

export default Dashboard;
