"use client";
import RecordList from "@/app/components/recordList";
import React from "react";
import { useContext, useEffect, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";

const RecordPage = () => {
  return (
    <div className="flex max-w-[2000px] mx-auto mt-8 gap-6">
      <div className="w-[320px] flex flex-col px-4 py-6 bg-white rounded-xl gap-6">
        <h3>Records</h3>
        <button className="btn btn-info bg-[#0166FF] text-white rounded-5 py-1 text-base h-8">
          + Add
        </button>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full max-w-xs border-[1px] border-[#D1D5DB] bg-[#F3F4F6] h-8 px-4 py-1 text-base"
        />
        <p className="text-base font-semibold text-[#1F2937]">Types</p>
        <div className="flex justify-between">
          <p className="text-base font-semibold text-[#1F2937]">Category</p>
          <p className="text-base font-semibold text-[#1F2937] opacity-20">
            Clear
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <IoMdEye size={20} />
            <p className="text-base text-[#1F2937]">Food & Drinks</p>
          </div>
          <div className="flex gap-2 items-center">
            <IoMdEye size={20} />
            <p className="text-base text-[#1F2937]">Food & Drinks</p>
          </div>
          <div className="flex gap-2 items-center">
            <IoMdEye size={20} />
            <p className="text-base text-[#1F2937]">Food & Drinks</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <IoIosAdd size={20} />
          <p className="text-base text-[#1F2937]">Add Category</p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <div>Last 30 Days</div>
          <select className="select select-bordered w-full max-w-[180px] text-base font-semibold">
            <option disabled selected>
              Newest first
            </option>
            <option>Latest first</option>
          </select>
        </div>
        <div className="w-full ">
          <p className="mb-3">Today</p>
          <RecordList />
        </div>
      </div>
    </div>
  );
};

export default RecordPage;
