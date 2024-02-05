/** @format */

import React, { useEffect } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  parse,
  isWithinInterval,
} from "date-fns";
import { countJobsByStatus } from "../../utils/countJobsByStatus";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

const EventCalendar = ({
  events,
  selectedMonth,
  setFilterMode,
  setSelectedDate,
  loading,
}) => {
  // Define the start and end of the selected month
  const monthStart = startOfMonth(selectedMonth);
  const monthEnd = endOfMonth(selectedMonth);

  // Filter and parse the events for the selected month
  // const parsedEvents = events
  //   .filter((event) => {
  //     const eventDate = parse(event.timeline, "dd-MM-yyyy", new Date());
  //     return isWithinInterval(eventDate, { start: monthStart, end: monthEnd });
  //   })
  //   .map((event) => ({
  //     ...event,
  //     parsedDate: parse(event.timeline, "dd-MM-yyyy", new Date()),
  //   }));

  // useEffect(() => {
  //   const counts = countJobsByStatus(parsedEvents);
  //   setJobCounts(counts);
  // }, [parsedEvents]);
  // Function to find events for a specific day
  const findEventsForDay = (day) => {
    return events.filter(
      (event) =>
        format(event.parsedDate, "yyyy-MM-dd") === format(day, "yyyy-MM-dd")
    );
  };

  const handleMoreEventsClick = (day) => {
    setSelectedDate(day);
    setFilterMode("date");
  };
  if (loading) {
    return (
      <div className=" relative flex justify-center items-center mt-4">
        <FaSpinner className="w-1/6 h-1/6 animate-spin text-purple-500" />
      </div>
    );
  }
  return (
    <div className="max-w-6xl px-3">
      <h2 className="text-xl font-semibold text-center my-4">
        Events for {format(selectedMonth, "MMMM yyyy")}
      </h2>
      <div className="grid grid-cols-7 gap-3">
        {eachDayOfInterval({ start: monthStart, end: monthEnd }).map((day) => {
          const dayEvents = findEventsForDay(day);
          const displayEvents = dayEvents.slice(0, 2);
          const moreEventsCount = dayEvents.length - 2;

          return (
            <div
              key={day}
              className={`border px-3 ${
                dayEvents.length > 0 ? "py-2" : "py-8"
              } rounded-lg shadow`}
            >
              <strong className="block text-sm font-bold">
                {format(day, "dd")}
              </strong>
              {displayEvents.map((event) => (
                <Link key={event.id} to={`/job/${event.id}`}>
                  <div
                    key={event.id}
                    className="mt-2 p-1 text-slate-200 bg-indigo-700 rounded-md shadow-sm"
                  >
                    <p className="text-sm font-medium truncate">
                      {event.title}
                    </p>
                  </div>
                </Link>
              ))}
              {moreEventsCount > 0 && (
                <button
                  onClick={() => handleMoreEventsClick(day)}
                  className="mt-2 text-xs text-indigo-700 hover:text-indigo-900"
                >
                  +{moreEventsCount} more
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCalendar;
