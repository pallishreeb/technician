 export   const sortByDueTime = (a, b) => {
   const parseTime = (timeString) => {
     const [hours, minutes, period] = timeString
       .match(/(\d+):(\d+) (\w+)/)
       .slice(1);
     const totalMinutes =
       ((parseInt(hours) % 12) + (period.toLowerCase() === "pm" ? 12 : 0)) *
         60 +
       parseInt(minutes);

     return {
       totalMinutes,
       period,
     };
   };

   const timeA = parseTime(a.duetime);
   const timeB = parseTime(b.duetime);

   if (timeA.period !== timeB.period) {
     return timeA.period.localeCompare(timeB.period);
   }

   return timeA.totalMinutes - timeB.totalMinutes;
 };
