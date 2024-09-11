import React from "react";
import { GoX } from "react-icons/go";

const AddRecord = () => {
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
              <button className="rounded-[20px] px-[55px] py-2 text-base text-white bg-[#0166FF] w-1/2">
                Expense
              </button>
              <button className="rounded-[20px] px-[55px] py-2 w-1/2">
                Income
              </button>
            </div>
            <div className="mt-5">
              <p className="text-base">Amount</p>
              <input
                className="border-[1px] border-[#D1D5DB] px-4 py-3 rounded-xl bg-[#F9FAFB] w-full"
                type="number"
                placeholder="T 000.00"
              />
            </div>
            <div className="mt-5">
              <p className="text-base">Category</p>
              <input
                className="border-[1px] border-[#D1D5DB] px-4 py-3 rounded-xl bg-[#F9FAFB] w-full"
                type="list"
                placeholder="Choose"
              />
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
            <div className="card-actions mt-5">
              <button className="btn btn-primary rounded-[20px] w-full py-2 bg-[#0166FF]">
                Add Record
              </button>
            </div>
          </div>
          <div className="px-6 py-5 w-1/2">
            {/* <div>
              <p className="text-base">Payee</p>
              <input
                type="text"
                placeholder="Write here"
                className="border-[1px] border-[#D1D5DB] px-4 py-3 rounded-xl bg-[#F9FAFB] w-full"
              />
            </div> */}
            <div className="">
              <p className="text-base">Description</p>
              <input
                type="text"
                placeholder="Write here"
                className="border-[1px] border-[#D1D5DB] px-4 py-3 rounded-xl bg-[#F9FAFB] w-full h-[365px]"
              />
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default AddRecord;
