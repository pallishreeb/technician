/** @format */

import React, { useEffect, useState } from "react";
import { filterBydates, getAllJobs } from "../networkCalls";
import { sortByDueTime } from "../utils/sortByDueTime";
import { countJobsByStatus } from "../utils/countJobsByStatus";
import processEventsForMonth from "../utils/processEventsForMonth";
import { useAuthApi } from "../context/authContext/authProvider";
import { useTaskApi } from "../context/taskContext/taskProvider";
import { GET_TASKS } from "../context/constansts";
import { toast } from "react-toastify";
import { endOfMonth, format, startOfMonth } from "date-fns";
import {
  MiniCalendar,
  EventListByDate,
  EventListByMonth,
  MiniMonthCalendar,
  JobSummary,
} from "../components";

const Calendar = () => {
  const { state: authState } = useAuthApi();
  const { dispatch, state: taskState } = useTaskApi();
  const [tasksOfSelectedDate, setTasksOfSelectedDate] = useState([]);
  const [filterMode, setFilterMode] = useState("date");
  const [tasksOfSelectedMonth, setTasksOfSelectedMonth] = useState([]);
  const [loading, setLoading] = useState(false);
  const [jobCounts, setJobCounts] = useState({
    All: 0,
    Assigned: 0,
    InProgress: 0,
    Completed: 0,
    Cancelled: 0,
  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  const [error, setError] = useState(null);
  useEffect(() => {
    if (error === 401) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  }, [error]);
  const filterTasksByDate = (date) => {
    setLoading(true);
    filterBydates(date, authState?.token)
      .then((res) => {
        const sortedData = res.data.sort(sortByDueTime);
        setTasksOfSelectedDate(sortedData);
        const counts = countJobsByStatus(sortedData);
        setJobCounts(counts);
        setLoading(false);
      })
      .catch((error) => {
        if (error?.response?.status === 401) {
          setError(401);
          setLoading(false);
        } else {
          toast.error(
            error?.response?.data?.message ||
              "Something Went Wrong, Please Try Later"
          );
          setLoading(false);
        }
      });
  };
  const filterTasksByMonth = () => {
    // Define the start and end of the selected month
    const monthStart = startOfMonth(selectedMonth);
    const monthEnd = endOfMonth(selectedMonth);
    if (taskState?.tasks?.length > 0) {
      const { counts, parsedEvents } = processEventsForMonth(
        taskState?.tasks,
        monthStart,
        monthEnd
      );
      setTasksOfSelectedMonth(parsedEvents);
      setJobCounts(counts);
      return;
    }
    setLoading(true);
    getAllJobs(authState?.token)
      .then((res) => {
        dispatch({ type: GET_TASKS, payload: res?.data });
        const { counts, parsedEvents } = processEventsForMonth(
          res?.data,
          monthStart,
          monthEnd
        );
        setTasksOfSelectedMonth(parsedEvents);
        setJobCounts(counts);
        setLoading(false);
      })
      .catch((error) => {
        if (error?.response?.status === 401) {
          setError(401);
          setLoading(false);
        } else {
          toast.error(
            error?.response?.data?.message ||
              "Something Went Wrong, Please Try Later"
          );
          setLoading(false);
        }
      });
  };
  useEffect(() => {
    if (filterMode === "date") {
      const formattedDate = format(selectedDate, "dd-MM-yyyy");
      filterTasksByDate(formattedDate);
    } else {
      // const monthFormat = "MM-yyyy";
      // const formattedMonth = format(selectedDate, monthFormat);
      filterTasksByMonth();
    }
  }, [selectedDate, filterMode, selectedMonth]);
  return (
    <div className="calendar-page-container ">
      <div className="mini-calendar-container ">
        <div className="flex justify-start items-center px-2 my-4">
          <div className="border rounded-lg overflow-hidden flex">
            <button
              className={`px-4 py-2 text-sm font-medium ${
                filterMode === "date"
                  ? "bg-purple-500 text-white"
                  : "text-gray-600 bg-white hover:bg-gray-100"
              }`}
              onClick={() => setFilterMode("date")}
            >
              Filter by Date
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${
                filterMode === "month"
                  ? "bg-purple-500 text-white"
                  : "text-gray-600 bg-white hover:bg-gray-100"
              }`}
              onClick={() => setFilterMode("month")}
            >
              Filter by Month
            </button>
          </div>
        </div>
        {filterMode === "date" ? (
          <MiniCalendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        ) : (
          <MiniMonthCalendar
            selectedDate={selectedMonth}
            setSelectedDate={setSelectedMonth}
          />
        )}
        <JobSummary
          filterMode={filterMode}
          jobCounts={jobCounts}
          loading={loading}
        />
      </div>

      <div className="event-list-container">
        {filterMode === "date" ? (
          <EventListByDate
            selectedDate={selectedDate}
            events={tasksOfSelectedDate}
            loading={loading}
          />
        ) : (
          <EventListByMonth
            selectedMonth={selectedMonth}
            events={tasksOfSelectedMonth}
            setFilterMode={setFilterMode}
            setSelectedDate={setSelectedDate}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
};

export default Calendar;
