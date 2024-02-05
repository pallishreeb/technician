/** @format */

import React from "react";
import { FaSpinner } from "react-icons/fa";

const JobSummary = ({ filterMode, jobCounts, loading }) => {
  if (loading) {
    return (
      <div className=" relative flex justify-center items-center mt-4">
        <FaSpinner className="w-1/6 h-1/6 animate-spin text-purple-500" />
      </div>
    );
  }
  return (
    <div className="my-5  px-3 py-3 bg-white shadow-lg rounded-lg text-indigo-700 w-[300px]">
      <h2 className="text-lg font-semibold text-purple-500 mb-1 text-center">
        Job Summary Of the {filterMode === "date" ? "day" : "month"}
      </h2>
      <div>
        <div className=" shadow-sm px-2 py-2 rounded-lg flex  items-center justify-between">
          <p className="text-base font-medium">All Jobs</p>
          <p className="text-xl font-semibold">{jobCounts.All}</p>
        </div>
        <div className="shadow-sm px-2 py-2 rounded-lg flex  items-center justify-between">
          <p className="text-base font-medium">Assigned</p>
          <p className="text-xl font-semibold">{jobCounts.Assigned}</p>
        </div>
        <div className=" shadow-sm px-2 py-2 rounded-lg flex  items-center justify-between">
          <p className="text-base font-medium">InProgress</p>
          <p className="text-xl font-semibold">{jobCounts.InProgress}</p>
        </div>
        <div className="shadow-sm px-2 py-2 rounded-lg flex  items-center justify-between">
          <p className="text-base font-medium">Completed</p>
          <p className="text-xl font-semibold">{jobCounts.Completed}</p>
        </div>
        <div className="shadow-sm px-2 py-2 rounded-lg flex  items-center justify-between">
          <p className="text-base font-medium">Cancelled</p>
          <p className="text-xl font-semibold">{jobCounts.Cancelled}</p>
        </div>
      </div>
    </div>
  );
};

export default JobSummary;
