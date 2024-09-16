import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GoX } from "react-icons/go";
import { apiUrl } from "../utils/util";
import { UserContext } from "../context/user-context";
import CategoryList from "./categoryList";
import { toast } from "react-toastify";

const AddRecord = () => {
  const [categories, setCategories] = useState(null);
  const fetchCategories = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(`${apiUrl}/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("ST", res.data);
      setCategories(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch categories");
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  // const { user } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState("INC");
  const [addRecord, setAddRecord] = useState({
    name: "",
    amount: 0,
    cid: "",
    uid: "3009e18c-9870-4c87-bcf9-67aa7af0cb07",
    description: "",
  });
  const handleChangeForm = (e) => {
    setAddRecord({ ...addRecord, [e.target.name]: e.target.value });
  };

  const addRecordData = async () => {
    const newData = {
      ...setAddRecord,
      transaction_type: activeTab,
    };
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(`${apiUrl}/records`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 201) {
        toast.success("Record amjilttai nemegdlee");
      }
    } catch (error) {
      toast.error("Record nemeh uyd aldaa garlaa");
    }
  };

  // useEffect(() => {
  //   fetchAddRecord();
  // }, [user]);

  console.log("addrecord", addRecord);
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="card bg-base-100 w-[1000px] max-h-[512px] shadow-xl">
        <div className="flex justify-between items-center px-6 py-5">
          <h3 className="text-xl font-semibold text-[#0F172A]">Add Record</h3>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
        <div className="flex ">
          <div className="px-6 py-5 w-1/2">
            <div className="rounded-[20px] bg-[#F3F4F6]">
              <button
                onClick={() => setActiveTab("EXP")}
                className={`${
                  activeTab === "EXP"
                    ? "bg-blue-500 text-white"
                    : "bg-transparent text-black"
                } rounded-[20px] px-[55px] py-2 text-base  w-1/2`}
              >
                Expense
              </button>
              <button
                onClick={() => setActiveTab("INC")}
                className={`${
                  activeTab === "INC"
                    ? "bg-green-500 text-white"
                    : "bg-transparent text-black"
                } rounded-[20px] px-[55px] py-2 w-1/2`}
              >
                Income
              </button>
            </div>
            <div className="mt-5">
              {/* <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                onChange={handleChangeForm}
              /> */}
              <p className="text-base">Amount</p>
              <input
                className="border-[1px] border-[#D1D5DB] px-4 py-3 rounded-xl bg-[#F9FAFB] w-full"
                type="number"
                name="amount"
                placeholder="T 000.00"
                onChange={handleChangeForm}
              />
            </div>
            <div className="mt-5">
              <p className="text-base">Category</p>
              <select
                className="select border-[1px] border-[#D1D5DB] px-4 py-3 rounded-xl
                bg-[#F9FAFB] w-full"
                type="list"
                name="cid"
                placeholder="Choose"
                onChange={handleChangeForm}
              >
                {categories?.category.map((cat) => (
                  <option value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
            <div className="mt-5 flex w-full gap-3 justify-between">
              <div className="w-1/2">
                <p className="text-base">Date</p>
                <input
                  className="border-[1px] border-[#D1D5DB] px-4 py-3 rounded-xl bg-[#F9FAFB] w-full"
                  type="date"
                />
              </div>
              <div className="w-1/2">
                <p className="text-base">Time</p>
                <input
                  className="border-[1px] border-[#D1D5DB] px-4 py-3 rounded-xl bg-[#F9FAFB] w-full"
                  type="time"
                />
              </div>
            </div>
            <form method="dialog" className="card-actions mt-5">
              <button
                className={`btn btn-primary rounded-[20px] w-full py-2 bg-[#0166FF] ${
                  activeTab === "EXP" ? "bg-blue-500" : "bg-green-500"
                }`}
                onClick={addRecordData}
              >
                Add Record
              </button>
            </form>
          </div>
          <div className="px-6 py-5 w-1/2">
            <div className="">
              <p className="text-base">Description</p>
              <input
                type="text"
                name="description"
                placeholder="Write here"
                className="border-[1px] border-[#D1D5DB] px-4 py-3 rounded-xl bg-[#F9FAFB] w-full h-[365px]"
                onChange={handleChangeForm}
              />
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default AddRecord;
