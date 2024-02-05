/** @format */

import React, { useState } from "react";
import { format, addMonths, subMonths } from "date-fns";

const MiniMonthCalendar = ({ selectedDate, setSelectedDate }) => {
  const [currentYear, setCurrentYear] = useState(new Date());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const onMonthClick = (monthIndex) => {
    const newSelectedDate = new Date(currentYear.getFullYear(), monthIndex, 1);
    setSelectedDate(newSelectedDate);
  };

  const renderHeader = () => {
    const dateFormat = "yyyy";
    return (
      <div className="flex justify-between items-center text-lg font-semibold p-4">
        <button
          className="text-xl"
          onClick={() => setCurrentYear(subMonths(currentYear, 12))}
        >
          {"<"}
        </button>
        <span>{format(currentYear, dateFormat)}</span>
        <button
          className="text-xl"
          onClick={() => setCurrentYear(addMonths(currentYear, 12))}
        >
          {">"}
        </button>
      </div>
    );
  };

  const renderMonths = () => {
    return (
      <div className="grid grid-cols-3  gap-2 px-2 pb-5">
        {months.map((month, index) => (
          <div
            className={`p-2 text-sm cursor-pointer rounded-lg ${
              currentYear.getFullYear() === selectedDate.getFullYear() &&
              index === selectedDate.getMonth()
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            key={index}
            onClick={() => onMonthClick(index)}
          >
            <span className="block text-center">{month}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="border border-gray-300 rounded-lg shadow-lg">
      {renderHeader()}
      {renderMonths()}
    </div>
  );
};

export default MiniMonthCalendar;
