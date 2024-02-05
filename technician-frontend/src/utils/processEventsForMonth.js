/** @format */

import { parse, isWithinInterval } from "date-fns";
import { countJobsByStatus } from "./countJobsByStatus";

// Utility function to filter and parse events for the selected month, then count jobs by status
 export default function processEventsForMonth(events, monthStart, monthEnd) {
  // Filter and parse the events for the selected month
  const parsedEvents = events
    .filter((event) => {
      const eventDate = parse(event.timeline, "dd-MM-yyyy", new Date());
      return isWithinInterval(eventDate, { start: monthStart, end: monthEnd });
    })
    .map((event) => ({
      ...event,
      parsedDate: parse(event.timeline, "dd-MM-yyyy", new Date()),
    }));

  // Count jobs by status
  const counts = countJobsByStatus(parsedEvents);
  return { counts, parsedEvents };
}
