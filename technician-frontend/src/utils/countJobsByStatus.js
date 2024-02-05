/** @format */

export const countJobsByStatus = (tasks) => {
  const initialCount = {
    All: 0,
    Assigned: 0,
    InProgress: 0,
    Completed: 0,
    Cancelled: 0,
  };

  const count = tasks.reduce((acc, task) => {
    acc.All += 1; // Increment for each task to count total jobs
    if (task.status === "Assigned") acc.Assigned += 1;
    else if (task.status === "Inprogress") acc.InProgress += 1;
    else if (task.status === "Completed") acc.Completed += 1;
    else if (task.status === "Cancelled") acc.Cancelled += 1;

    return acc;
  }, initialCount);

  return count;
};
