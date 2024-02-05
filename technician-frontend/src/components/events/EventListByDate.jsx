/** @format */

import React from "react";
import { format, parse } from "date-fns";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

const EventList = ({ events, selectedDate, loading }) => {
  // const eventsForSelectedDate = events.filter((event) => {
  //   const eventDate = parse(event.timeline, "dd-MM-yyyy", new Date());
  //   return isSameDay(eventDate, selectedDate);
  // });
  const colsPerRow = {
    1: "col-span-8",
    2: "col-span-4",
    3: "col-span-2",
    4: "col-span-2",
    5: "col-span-2",
    6: "col-span-2",
  };
  function colsSpan(arrayLength) {
    let colClass;
    if (arrayLength > 6) {
      colClass = "col-span-2";
    } else {
      colClass = colsPerRow[arrayLength];
    }
    return colClass;
  }
  const getEventsForHour = (hour) => {
    return events.filter((event) => {
      const eventTime = parse(event.duetime, "hh:mm a", new Date());
      return eventTime.getHours() === hour;
    });
  };

  const formatHour = (hour) => {
    return hour === 0
      ? "12 AM"
      : hour < 12
      ? `${hour} AM`
      : hour === 12
      ? "12 PM"
      : `${hour - 12} PM`;
  };
  if (loading) {
    return (
      <div className=" relative flex justify-center items-center mt-4">
        <FaSpinner className="w-1/6 h-1/6 animate-spin text-purple-500" />
      </div>
    );
  }
  return (
    <>
      <h2 className="font-bold text-lg text-indigo-800 text-center pb-5 border-b overflow-y-clip">
        {format(selectedDate, "dd MMMM yyyy")}
      </h2>
      <div className="w-full max-h-[82vh] px-3 overflow-y-scroll">
        {Array.from({ length: 24 }).map((_, hour) => (
          <div key={hour} className="flex border-b">
            <span className="w-16 py-4 text-right text-gray-600 mr-3 text-sm font-semibold">
              {formatHour(hour)}
            </span>
            <div className="grid grid-cols-8 gap-4 w-full">
              {getEventsForHour(hour).map((event, _, eventsArray) => {
                return (
                  <Link
                    to={`/job/${event.id}`}
                    className={` ${colsSpan(eventsArray.length)}`}
                    key={event.id}
                  >
                    <div
                      className={`p-2 text-slate-100 bg-indigo-600 rounded-lg my-1 cursor-pointer 
                 `}
                    >
                      <p className="font-semibold text-sm">{event.title}</p>
                      <p className="text-xs">{event.duetime}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EventList;
