"use client";
import AddRecord from "@/app/components/addRecord";
import { CategoryModal } from "@/app/components/category-modal";
import CategoryList from "@/app/components/categoryList";
import RecordList from "@/app/components/recordList";
import { ArrowLeft } from "@/icons/ArrowLeft";
import { ArrowRight } from "@/icons/ArrowRight";
import React from "react";
import { useContext, useEffect, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";

const RecordPage = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);

  const handleClose = () => {
    setCategoryOpen(false);
  };
  return (
    <div className="flex max-w-[2000px] mx-auto mt-8 gap-6">
      <div className="w-[320px] flex flex-col px-4 py-6 bg-white rounded-xl gap-6">
        <h3>Records</h3>
        <button
          className="btn btn-info bg-[#0166FF] text-white rounded-5 py-1 text-base h-8"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          + Add
        </button>
        <AddRecord />
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full max-w-xs border-[1px] border-[#D1D5DB] bg-[#F3F4F6] h-8 px-4 py-1 text-base"
        />
        <div>
          <p className="text-base font-semibold text-[#1F2937] mb-4">Types</p>
          <div className="flex flex-col gap-1">
            <div className="form-control">
              <label className="label cursor-pointer gap-4 justify-start">
                <input
                  type="radio"
                  name="theme-radios"
                  className="radio theme-controller w-4 h-4"
                  value="default"
                />
                <span className="label-text">All</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer gap-4 justify-start">
                <input
                  type="radio"
                  name="theme-radios"
                  className="radio theme-controller w-4 h-4"
                  value="retro"
                />
                <span className="label-text">Income</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer gap-4 justify-start">
                <input
                  type="radio"
                  name="theme-radios"
                  className="radio theme-controller w-4 h-4"
                  value="cyberpunk"
                />
                <span className="label-text">Expense</span>
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-base font-semibold text-[#1F2937]">Category</p>
          <p className="text-base font-semibold text-[#1F2937] opacity-20">
            Clear
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <CategoryList />
        </div>
        <div className="flex items-center gap-2">
          <IoIosAdd size={20} />
          <button
            className="text-base text-[#1F2937]"
            onClick={() => setCategoryOpen(true)}
          >
            Add Category
          </button>
          <CategoryModal categoryOpen={categoryOpen} close={handleClose} />
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <button className="btn btn-square bg-[#E5E7EB]">
              <ArrowRight />
            </button>
            <p>Last 30 Days</p>
            <button className="btn btn-square bg-[#E5E7EB]">
              <ArrowLeft />
            </button>
          </div>
          <select className="select select-bordered w-full max-w-[180px] text-base font-semibold">
            <option disabled selected>
              Newest first
            </option>
            <option>Latest first</option>
          </select>
        </div>
        <div className="w-full ">
          <p className="mb-3 mt-3">Today</p>
          <RecordList />
        </div>
      </div>
    </div>
  );
};

export default RecordPage;
